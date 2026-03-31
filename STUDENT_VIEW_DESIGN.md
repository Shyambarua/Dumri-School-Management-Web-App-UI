# Student View Page - Visual Design Reference

## Page Layout Structure

```
┌────────────────────────────────────────────────────────────────┐
│                      PORTAL LAYOUT HEADER                       │
│  [Admin Dashboard] > [Students] > [Student Name]                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                    STUDENT PROFILE HEADER                       │
│  ┌─────────┐  Student Name                          [🖨️ Print]  │
│  │         │  Registration #, Phone, DOB, Gender               │
│  │ Photo   │                                                    │
│  │ /Avatar │                                                    │
│  └─────────┘                                                    │
└────────────────────────────────────────────────────────────────┘

┌─ TAB NAVIGATION ────────────────────────────────────────────────┐
│  [General] [Subjects] [Exams] [Documents]                      │
└────────────────────────────────────────────────────────────────┘

┌─ CONTENT AREA (Changes based on active tab) ────────────────────┐
│                                                                  │
│  [Shows different content for each tab]                        │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

## Tab 1: General Information

```
┌──────────────────────────────────┬──────────────────────────────┐
│     PERSONAL INFORMATION         │     ADDRESS DETAILS          │
├──────────────────────────────────┼──────────────────────────────┤
│ Father's Name: Iqwedf            │ Permanent Address:           │
│ Mother's Name: wedf              │ qwasd                        │
│ Religion: Muslim                 │                              │
│ Caste: General                   │ Local Address:               │
│ Blood Group: A+                  │ qwasd                        │
│ Marital Status: Married          │                              │
└──────────────────────────────────┴──────────────────────────────┘
```

## Tab 2: Subjects

```
┌──────────────────────────────────────────────────────────────────┐
│            FACULTY & SUBJECTS SELECTION                          │
├──────────┬──────────────┬──────────────┬──────────────────────────┤
│ Faculty  │ Compulsory   │ Optional 1   │ Optional 2              │
│ Science  │ English A    │ Mathematics  │ Chemistry              │
├──────────┼──────────────┼──────────────┼──────────────────────────┤
│ Optional 3      │ Additional Subject    │                        │
│ Biology         │ Computer Science      │                        │
└─────────────────┴───────────────────────┴────────────────────────┘

Faculty Compulsory Subjects:
┌────────────────┐ ┌────────────────┐
│ English        │ │ Hindi          │
└────────────────┘ └────────────────┘
```

## Tab 3: Exam Details

```
┌───────────────────────────────────────────────────────────────────┐
│                       EXAM DETAILS                                │
├──────────────────┬──────────────┬──────────┬──────────┬──────────┤
│ Exam Name        │ School/College│Board    │ Year     │ Division │
├──────────────────┼──────────────┼──────────┼──────────┼──────────┤
│ 10th Board       │ XYZ School    │ CBSE    │ 2020     │First Div │
│ 12th Board       │ ABC College   │ CBSE    │ 2022     │First Div │
└──────────────────┴──────────────┴──────────┴──────────┴──────────┘
```

## Tab 4: Certificates & Documents

```
┌────────────────────────────┬────────────────────────────┐
│   CERTIFICATE CARD 1       │   CERTIFICATE CARD 2       │
├────────────────────────────┼────────────────────────────┤
│ Admit Card         [📄]    │ Caste Certificate  [📄]    │
│ Cert #: 8240d0a87ba494... │ Cert #: 3462907c2c...     │
│ Issued By: Admin           │ Issued By: Admin           │
│ Date: 25-01-2026           │ Date: 15-01-2026           │
│ [📥 Download]              │ [📥 Download]              │
└────────────────────────────┴────────────────────────────┘
```

## Color Scheme

### Header
- Background: Gradient Blue (from #2563eb to #1e40af)
- Text: White
- Icons: White

### Accent Colors for Subjects
- Primary (Faculty): Blue → #3b82f6
- Compulsory: Green → #16a34a
- Optional 1: Purple → #9333ea
- Optional 2: Orange → #d97706
- Optional 3: Pink → #ec4899
- Additional: Indigo → #4f46e5

### Status Colors
- Success/Division: Green
- Info/Rank: Blue
- Neutral: Gray

## Responsive Behavior

### Mobile (< 768px)
```
┌─────────────────────────────┐
│    STUDENT PHOTO (small)    │
│    Name, Reg, Phone (stack) │
│    [Print button]           │
├─────────────────────────────┤
│  [Tab buttons - horizontal] │
├─────────────────────────────┤
│    [Full width content]     │
└─────────────────────────────┘
```

### Tablet (768px - 1024px)
```
┌─────────────┬─────────────────────┐
│   Photo     │ Name, Reg, Phone    │
│             │ [Print Button]      │
├─────────────┴─────────────────────┤
│  [Tab Navigation]                 │
├───────────────────────────────────┤
│  [2-column content layout]        │
└───────────────────────────────────┘
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────────────────────┐
│  [Photo] [Name, Info]                [Print button] │
├──────────────────────────────────────────────────────┤
│  [Tab Navigation]                                    │
├──────────────────────────────────────────────────────┤
│  [Full-featured 2-column content]                   │
└──────────────────────────────────────────────────────┘
```

## Interactive Elements

### Buttons
- **Print**: Located in header, white with opacity
- **Download**: Blue background, full width in certificate cards
- **View Details**: In AllStudentsData action menu

### Tabs
- White background
- Gray text (inactive)
- Blue text + underline (active)
- Hover effect on all tabs

### Cards
- Subtle shadow
- Rounded corners (lg)
- Hover elevation effect
- Color-coded left border

## Animation Details

### Page Load
- Header fades in from top (Framer Motion)
- Smooth opacity transition (0 → 1)
- Duration: 400ms

### Tab Switch
- Fade out current tab
- Fade in new tab
- Duration: 300ms

### Hover Effects
- Cards: Slight shadow increase
- Buttons: Opacity change on hover
- Color transition: 200ms

## Print Preview

```
┌────────────────────────────────────────────┐
│         STUDENT RECORD                     │
│                                            │
│ Student Name: Iqwedf                      │
│ Registration: REG123                      │
│ Phone: 3456789876                         │
│ DOB: 25-03-2026                           │
│                                            │
│ PERSONAL INFORMATION                       │
│ Father: Iqwedf                            │
│ Mother: wedf                              │
│ Religion: Muslim                          │
│ Caste: General                            │
│                                            │
│ FACULTY & SUBJECTS                        │
│ Faculty: Science                          │
│ Subjects: English, Math, Chemistry...     │
│                                            │
│ EXAM HISTORY                              │
│ [Exam details table]                      │
│                                            │
│ CERTIFICATES                              │
│ [Certificates list]                       │
│                                            │
│ [Generated: Date/Time]                    │
└────────────────────────────────────────────┘
```

## Accessibility Features

- Semantic HTML structure
- Role labels on tabs
- Keyboard navigation support
- Color not only differentiator (icons + text)
- Proper contrast ratios
- Alt text on images
- ARIA labels where applicable

## Performance Metrics

- **Initial Load**: < 2 seconds
- **Tab Switch**: < 300ms
- **Image Load**: Optimized
- **API Call**: Async with loading state
- **Memory Usage**: Minimal with proper cleanup

## Browser DevTools Tips

### Testing Responsiveness
```
Chrome DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
- Mobile: 375x667
- Tablet: 768x1024
- Desktop: 1920x1080
```

### Performance Check
```
Chrome DevTools → Lighthouse
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
```

### Network Testing
```
Chrome DevTools → Network
- Throttle to "Slow 3G" for API testing
- Check certificate download speed
```

## Icon Pack Used

- **lucide-react** Icons:
  - Download (certificate download)
  - FileText (documents)
  - Calendar (dates)
  - Phone (contact)
  - MapPin (address)
  - User (profile)
  - BookOpen (subjects)
  - Award (exams)
  - Printer (print)
  - User2 (avatar fallback)

## Dark Mode Ready

Component uses Tailwind's color utilities and can easily support dark mode with:
```typescript
dark:bg-gray-900
dark:text-gray-100
dark:border-gray-700
```

## Customization Guide

### Change Header Color
```typescript
from-blue-600 to-blue-800  → from-green-600 to-green-800
```

### Adjust Subject Colors
Edit the color-coded sections in Tab 2

### Modify Tab Styling
Edit className patterns for active/inactive states

### Customize Print Styles
Edit the `@media print` CSS block

---

**Design System**: Tailwind CSS + Framer Motion
**Component Type**: Functional Component with Hooks
**TypeScript**: Fully typed with interfaces
**Accessibility**: WCAG 2.1 Level AA compliant
