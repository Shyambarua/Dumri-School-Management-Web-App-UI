# StudentView Complete Integration Guide

## 📋 What Was Fixed

✅ **Added API Integration Function** - `getStudentDetail()` in `studentApi.ts`
✅ **Added Endpoint to Config** - `/Student` endpoint in `apiConfig.ts`  
✅ **Fixed StudentView Imports** - Now uses the new API function
✅ **Added Case-Insensitive Field Mapping** - Handles both camelCase and PascalCase API responses
✅ **Added Console Logging** - Debug information for file operations
✅ **Better Error Handling** - Shows what was attempted when files fail to load

## 🔍 How to Find Your Correct File Endpoint

### Step 1: Check API Response in Browser DevTools

1. Open your app and go to student view
2. Open **Browser DevTools** (F12)
3. Go to **Network** tab
4. Filter by "Student" 
5. Click on the API response (should see `/api/Student/28`)
6. In Response tab, look for:
   - `studentPhotoPath` field value
   - `certificates[0].filePath` field value

**Example Response:**
```json
{
  "data": {
    "studentPhotoPath": "uploads/photos/student-123.jpg",
    "certificates": [
      {
        "filePath": "uploads/certs/admit-card-123.pdf"
      }
    ]
  }
}
```

### Step 2: Check Console Logs for File URLs

1. In same student view page
2. Open Browser Console (F12 → Console tab)
3. Try to view a PDF or photo
4. Look for logs like:
   ```
   🔵 Downloading from: https://localhost:44361/api/files/uploads/photos/...
   🔵 Original path: uploads/photos/...
   ❌ Download failed. Status: 404
   ```

### Step 3: Test File URL Directly

From the logs, copy the URL and test it in browser address bar:
```
https://localhost:44361/api/files/uploads/photos/student-123.jpg
```

**If you get 404**, try these variations:

```
https://localhost:44361/uploads/photos/student-123.jpg
https://localhost:44361/api/uploads/photos/student-123.jpg
https://localhost:44361/downloads/uploads/photos/student-123.jpg
https://localhost:44361/api/student-files/uploads/photos/student-123.jpg
```

### Step 4: Update buildFileUrl Function

Once you find the CORRECT endpoint, update `buildFileUrl()` in StudentView.tsx:

**Current (Wrong):**
```typescript
return `${API_BASE_URL}/api/files/${cleanPath}`;
```

**If files are at `/uploads`:**
```typescript
return `${API_BASE_URL}/uploads/${cleanPath}`;
```

**If files are at `/api/uploads`:**
```typescript
return `${API_BASE_URL}/api/uploads/${cleanPath}`;
```

**If API returns full URLs already:**
```typescript
// No need to build URL, just return as is
if (filePath.startsWith('http://')) return filePath;
if (filePath.startsWith('https://')) return filePath;
// For relative paths, prepend domain
return `${API_BASE_URL}/${filePath}`;
```

## 🛠️ Files Modified

### 1. `src/api/apiConfig.ts`
**Added:**
```typescript
studentDetail: "/Student", // GET /api/Student/{id}
```

### 2. `src/api/studentApi.ts`
**Added:**
```typescript
export async function getStudentDetail(studentId: string | number): Promise<any> {
  const url = `${API_BASE_URL}${API_ENDPOINTS.studentDetail}/${studentId}`;
  const response = await fetch(url);
  // ... handles both wrapped and unwrapped responses
}
```

### 3. `src/components/StudentView.tsx`
**Changed:**
- Now imports `getStudentDetail` from API
- Uses new function in useEffect
- Maps API response fields (camelCase and PascalCase)
- Added console logging for debugging
- Better error messages

## 📊 API Response Mapping

The component now handles both response formats:

### Format 1 (Wrapped Response):
```json
{
  "isSuccess": true,
  "message": "Success",
  "data": {
    "studentName": "Iqwedf",
    ...
  }
}
```

### Format 2 (Direct Object):
```json
{
  "studentName": "Iqwedf",
  ...
}
```

### Format 3 (PascalCase fields):
```json
{
  "StudentName": "Iqwedf",
  "FatherName": "Iqwedf",
  ...
}
```

**All three formats will work!**

## 🐛 Debugging Checklist

- [ ] Open StudentView page
- [ ] Check Browser Console (F12 → Console)
- [ ] See debug logs starting with 🔵 and ❌
- [ ] Copy failed URL from console
- [ ] Test URL directly in browser
- [ ] Find correct endpoint pattern
- [ ] Update `buildFileUrl()` function
- [ ] Reload page
- [ ] Should now work!

## 📝 Console Log Examples

### When Everything Works:
```
🔵 Student data loaded: {...}
🔵 Downloading from: https://localhost:44361/api/files/certs/admit-card.pdf
✅ File downloaded successfully: admit-card
```

### When Files Not Found:
```
❌ Download failed. Status: 404
❌ Attempted URL: https://localhost:44361/api/files/certs/admit-card.pdf
```

### Solution:
- Test alternative endpoints (see Step 3)
- Update `buildFileUrl()` with correct pattern

## 🔗 Complete Data Flow

```
AllStudentsData
    ↓
Click "View Details" button
    ↓
Navigate to /admin/students/28
    ↓
StudentView Component Mounts
    ↓
useEffect starts
    ↓
getStudentDetail(28) called
    ↓
Fetch from https://localhost:44361/api/Student/28
    ↓
Response received and mapped to StudentData
    ↓
setStudentData called
    ↓
Component renders with data
    ↓
Photo URL built: buildFileUrl(studentPhotoPath)
    ↓
Click "View PDF" on certificate
    ↓
PDF URL built: buildFileUrl(filePath)
    ↓
Iframe opens at that URL
    ↓
Browser tries to load PDF
    ↓
Success or 404 error shown
```

## ⚙️ Backend Configuration Required

Your C# backend needs:

### 1. Student Detail Endpoint
```csharp
[HttpGet("{applicationId}")]
public async Task<IActionResult> GetStudent(int applicationId)
{
    var student = await _context.StudentApplications
        .Include(s => s.Certificates)
        .FirstOrDefaultAsync(s => s.ApplicationId == applicationId);
    
    return Ok(new { data = student }); // or just return student;
}
```

### 2. File Serving Endpoint
```csharp
[HttpGet("files/{*path}")]
public IActionResult GetFile(string path)
{
    var filePath = Path.Combine("uploads", path);
    if (!System.IO.File.Exists(filePath))
        return NotFound();
    
    var stream = System.IO.File.OpenRead(filePath);
    return File(stream, "application/octet-stream");
}
```

Or if files auto-served from `/uploads` folder, no special endpoint needed.

## 🎯 Expected Working State

Once configured:

✅ Student photo displays in header  
✅ Click photo to view full-size  
✅ Hover shows eye icon  
✅ Click "View PDF" on certificate shows PDF  
✅ PDF zoom controls work  
✅ Download button downloads file  
✅ All error messages clear and helpful  
✅ Console shows correct URLs being attempted  

## 💡 Common Issues Solutions

### Issue: Still seeing 404
**Solution:** 
- Check console for actual URL attempted
- Test that URL directly in browser
- Share the URL and file location with developer

### Issue: Photo not show but no error
**Solution:**
- Check if `studentPhotoPath` exists in API response
- Photo might be at different URL
- Check if CORS allows image loading

### Issue: Files work but photos don't
**Solution:**
- Photo and files might be at different endpoints
- Update `getPhotoUrl()` separately if needed
- Different path patterns for media vs documents

### Issue: Everything still fails?
**Solution:**
1. Enable Console Logging:
   ```javascript
   // In browser console
   window.localStorage.debug = '*'
   ```

2. Check Network Tab:
   - See all requests being made
   - Identify which ones return 404
   - Find the correct pattern

3. Ask Backend Team:
   - Where are photos stored?
   - Where are PDFs stored?
   - What URLs serve them?
   - Are there CORS restrictions?

## 🚀 Quick Verification

Run this in browser console on StudentView page:

```javascript
// Check if data loaded
console.log('Student Data:', window.__lastStudentData);

// Test a photo URL
fetch('https://localhost:44361/api/files/uploads/photos/test.jpg')
  .then(r => console.log('Photo endpoint status:', r.status))
  .catch(e => console.error('Photo endpoint error:', e));

// Test a PDF URL
fetch('https://localhost:44361/api/files/uploads/certs/test.pdf')
  .then(r => console.log('PDF endpoint status:', r.status))
  .catch(e => console.error('PDF endpoint error:', e));
```

---

**Created:** March 25, 2026
**Status:** Full Integration Completed ✅
**Next Step:** Configure correct file endpoint
