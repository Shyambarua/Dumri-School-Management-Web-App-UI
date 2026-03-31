# 🚀 StudentView Quick Start - What You Need to Do

## ✅ What's Already Done

- [x] Created `StudentView.tsx` component with PDF and photo viewers
- [x] Added `getStudentDetail()` API function
- [x] Added `/Student/{id}` endpoint to config
- [x] Automatic PascalCase ↔ camelCase conversion
- [x] Comprehensive error handling
- [x] Console logging with emoji indicators

## 🔴 What's Blocking It (3 Simple Steps)

### STEP 1: Find Your File Endpoint
**Action:** Open browser DevTools (F12) → Network tab → Look for StudentView API response

**Look for one of these file paths in the response:**
```
"studentPhotoPath": "uploads/photos/image.jpg"
"filePath": "documents/admit-card.pdf"
```

**Then test these URLs in your browser:**
```
https://localhost:44361/uploads/photos/image.jpg
https://localhost:44361/api/uploads/photos/image.jpg
https://localhost:44361/api/files/uploads/photos/image.jpg
https://localhost:44361/downloads/uploads/photos/image.jpg
```

**Which one works?** → Use that pattern for Step 2

### STEP 2: Update buildFileUrl Function
**File:** `src/components/StudentView.tsx` (around line 67)

**Current (WRONG):**
```typescript
return `${API_BASE_URL}/api/files/${cleanPath}`;
```

**Fix it to match what worked in Step 1:**
```typescript
// If this worked: https://localhost:44361/uploads/...
return `${API_BASE_URL}/uploads/${cleanPath}`;

// OR if this worked: https://localhost:44361/api/uploads/...
return `${API_BASE_URL}/api/uploads/${cleanPath}`;

// OR if this worked: https://localhost:44361/api/files/...
return `${API_BASE_URL}/api/files/${cleanPath}`;
```

### STEP 3: Reload and Test!
```
1. Save the file change
2. Reload your browser (Ctrl+R or F5)
3. Go to a student detail page
4. Try viewing a photo and PDF
5. Check console (F12) for error messages if something still fails
```

## 🎯 You'll Know It's Working When:

✅ Student photo shows in the header  
✅ Click photo → opens fullscreen viewer  
✅ Click "View PDF" → opens PDF in modal  
✅ Download buttons work  
✅ Console shows NO red ❌ errors  

## 📊 File Locations

| File | Purpose | Status |
|------|---------|--------|
| `src/api/apiConfig.ts` | API endpoints | ✅ Updated |
| `src/api/studentApi.ts` | getStudentDetail() function | ✅ Added |
| `src/components/StudentView.tsx` | Main component | ✅ Ready (needs file endpoint) |
| `STUDENT_VIEW_COMPLETE_GUIDE.md` | Detailed guide | 📖 In this folder |

## 🐛 Debug Missing Image/PDF

**If photos don't show:**
Open browser DevTools Console → See this log?
```
🔵 Downloading from: https://localhost:44361/api/files/...
❌ Download failed. Status: 404
```

**Fix:** That URL doesn't work. Find the right one from Step 1 and update line 67.

**If no logs at all:**
The component might not have loaded the student data. Check if the API endpoint actually returns data for the student ID you're viewing.

## 🔑 Key Points

- API might return **PascalCase** (StudentName) or **camelCase** (studentName)  
  → **✅ We handle both!**

- API might return wrapped (`{data: {...}}`) or direct (`{...}`)  
  → **✅ We handle both!**

- File paths might be **relative** or **absolute**  
  → **❌ Only relative paths supported, let's fix it if needed**

- Photos and PDFs might be at **different endpoints**  
  → **❌ Currently using same endpoint, can split if needed**

## ⚡ Emergency Commands

**Stuck? Run these in browser console:**

```javascript
// See what the API returned
console.log('API Response:', window.__studentData);

// Test photo endpoint
fetch('https://localhost:44361/api/files/uploads.jpg').then(r => console.log('Status:', r.status));

// Clear cache and reload
localStorage.clear(); location.reload();
```

## 📞 If Still Stuck

1. **Open browser console** (F12)
2. **Go to student detail page**
3. **Look for logs with** 🔵 and ❌ emoji
4. **Copy the URL** it tried to download from
5. **Test that URL** directly in a new tab
6. **Share what happened** + the URL

---

**Everything else is done. Just need the file endpoint!** 🎯
