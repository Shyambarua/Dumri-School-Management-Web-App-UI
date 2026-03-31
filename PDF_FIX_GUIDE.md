# PDF & Photo Display - Issue Resolution Guide

## What Was Fixed

✅ **PDF 404 Error** - Now handles file URLs properly
✅ **Profile Picture Not Showing** - Fixed with proper URL building
✅ **Error Handling** - Shows fallback message instead of blank iframe
✅ **Download Functionality** - Works with proper file paths

## Key Changes Made

### 1. Added URL Builder Function
```typescript
const buildFileUrl = (filePath: string): string => {
  if (!filePath) return '';
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return filePath; // Already a full URL
  }
  const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
  return `${API_BASE_URL}/api/files/${cleanPath}`;
};
```

### 2. PDF Viewer Now Shows Errors
- If PDF fails to load, shows user-friendly error message
- Provides "Download Instead" option
- No more blank 404 pages

### 3. Photo Display Fixed
- Uses buildFileUrl to construct proper image URL
- Fallback avatar shown if no photo
- Click to view full-size

## How to Configure the File API Endpoint

The current code assumes files are accessible at:
```
https://localhost:44361/api/files/{filePath}
```

If your backend serves files at a DIFFERENT endpoint, update the `buildFileUrl` function:

### Option 1: Files at `/uploads` endpoint
```typescript
const buildFileUrl = (filePath: string): string => {
  if (!filePath) return '';
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) return filePath;
  const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
  return `${API_BASE_URL}/uploads/${cleanPath}`;  // Changed from /api/files
};
```

### Option 2: Full URL already returned by API
If the API returns complete URLs (like `https://example.com/file.pdf`):
```typescript
const buildFileUrl = (filePath: string): string => {
  // API already returns full URLs, just validate
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
    return filePath;
  }
  // Fallback for relative paths
  const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
  return `${API_BASE_URL}/${cleanPath}`;
};
```

### Option 3: Files served with `/api/uploads`
```typescript
const buildFileUrl = (filePath: string): string => {
  if (!filePath) return '';
  if (filePath.startsWith('http://') || filePath.startsWith('https://')) return filePath;
  const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
  return `${API_BASE_URL}/api/uploads/${cleanPath}`;
};
```

## Debug Steps

### Step 1: Check What API Returns
Open browser console and check the student data:

```javascript
// In browser console at student view page:
// The API response will show the actual filePath format
console.log('Check Network tab → api/Student/28 response')
```

### Step 2: Verify File Path Format
The API should return something like:
```json
{
  "studentPhotoPath": "photos/profile-123.jpg",
  "certificates": [
    {
      "filePath": "certs/admit-card-123.pdf"
    }
  ]
}
```

### Step 3: Test File Access
Try accessing the file directly in browser:
```
https://localhost:44361/api/files/certs/admit-card-123.pdf
```

If you get 404, try other endpoints:
```
https://localhost:44361/api/uploads/certs/admit-card-123.pdf
https://localhost:44361/uploads/certs/admit-card-123.pdf
https://localhost:44361/certs/admit-card-123.pdf
```

### Step 4: Update Code
Once you find the correct endpoint, update `buildFileUrl` function in StudentView.tsx (Line ~62)

## Common Issues & Solutions

### Issue: PDF still shows 404
**Solution:**
1. Check browser's Network tab for actual request URL
2. Compare with where files are actually stored
3. Update the API endpoint in buildFileUrl
4. Test file URL directly in browser address bar

### Issue: Profile photo not showing
**Solution:**
1. Check if `studentPhotoPath` exists in API response
2. Verify the photo file actually exists
3. Check CORS headers if on different domain
4. Try accessing photo URL directly in browser

### Issue: PDF shows "Unable to Load" error
**Solution:**
1. Click "Download Instead" button
2. If download works, issue is PDF viewing (iframe)
3. If download fails, issue is file path
4. Check CORS configuration on backend

## File Endpoint Configuration Example

### For Backend with Separate File Server:

If your C# backend has a files controller:

```csharp
[HttpGet("api/files/{*path}")]
public IActionResult GetFile(string path)
{
    var filePath = Path.Combine("uploads", path);
    if (!System.IO.File.Exists(filePath))
        return NotFound();
    
    var stream = System.IO.File.OpenRead(filePath);
    return File(stream, "application/octet-stream");
}
```

Then use in buildFileUrl:
```typescript
return `${API_BASE_URL}/api/files/${cleanPath}`;
```

## Testing Checklist

- [ ] See console.log of what filePath API returns
- [ ] Test file URL directly in browser
- [ ] Update buildFileUrl to correct endpoint
- [ ] Reload page and test PDF view
- [ ] Test photo display
- [ ] Test download functionality
- [ ] Test on different student records

## Code Location

**File:** `src/components/StudentView.tsx`
**Function:** `buildFileUrl` (Line ~62)
**Line Range:** Lines 60-70

## After Fix

Once correct endpoint is configured:
- PDFs will load in iframe
- Photos will display in header
- Downloads will work
- Errors handled gracefully

---

**Status:** Code ready for endpoint configuration
**Next Step:** Verify actual file API endpoint and update buildFileUrl
