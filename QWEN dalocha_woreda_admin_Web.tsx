import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';

// ============ TRANSLATION CONTEXT ============
const translations = {
  am: {
    siteName: 'የዳሎቻ ወረዳ አስተዳደር',
    siteNameEn: 'DALOCHA WOREDA ADMINISTRATION',
    home: 'መነሻ',
    about: 'ስለ እኛ',
    services: 'አገልግሎቶች',
    news: 'ዜና',
    contact: 'አግኙን',
    admin: 'አስተዳዳሪ',
    login: 'ግባ',
    logout: 'ውጣ',
    heroTitle: 'እንኳን ወደ ዳሎቻ ወረዳ አስተዳደር በደህና መጡ',
    heroSubtitle: 'ለህዝብ አገልግሎት ቁርጠኛ',
    heroBtn: 'አገልግሎቶቻችንን ይመልከቱ',
    aboutTitle: 'ስለ ዳሎቻ ወረዳ',
    aboutText: 'ዳሎቻ ወረዳ በደቡብ ኢትዮጵያ ክልል ውስጥ የሚገኝ ወረዳ ነው። ወረዳው ለህዝቡ ጥራት ያለው አገልግሎት ለማቅረብ ቁርጠኛ ነው።',
    aboutMission: 'ተልዕኮ',
    aboutMissionText: 'ለሁሉም ዜጎች ፍትሃዊ፣ ጥራት ያለው እና ተደራሽ የሆነ የመንግስት አገልግሎት ማቅረብ',
    aboutVision: 'ራዕይ',
    aboutVisionText: 'ዳሎቻ ወረዳን ዘመናዊ፣ ተቀባይነት ያለው እና ውጤታማ የአስተዳደር ስርዓት ያላት ወረዳ ማድረግ',
    aboutValues: 'ዋና ዋና እሴቶች',
    aboutValuesText: 'ግልጽነት፣ ተጠያቂነት፣ ተሳትፎ፣ ፍትሃዊነት እና ቀጣይነት ያለው አገልግሎት',
    servicesTitle: 'የአገልግሎት መስሪያ ቢሮዎች',
    servicesSubtitle: '23 የክፍለ-ዘርፍ ቢሮዎች',
    learnMore: 'ተጨማሪ ይወቁ',
    newsTitle: 'የቅርብ ጊዜ ዜናዎች',
    contactTitle: 'አግኙን',
    contactAddress: 'አድራሻ',
    contactPhone: 'ስልክ',
    contactEmail: 'ኢሜይል',
    contactMessage: 'መልእክት ይላኩ',
    contactName: 'ስም',
    contactEmailLabel: 'ኢሜይል',
    contactSubject: 'ርዕሰ ጉዳይ',
    contactMsg: 'መልእክት',
    contactSend: 'ላክ',
    adminDashboard: 'የአስተዳዳሪ ዳሽቦርድ',
    adminUsers: 'ተጠቃሚዎች',
    adminServices: 'አገልግሎቶች',
    adminNews: 'ዜናዎች',
    adminMessages: 'መልእክቶች',
    adminSettings: 'ቅንብሮች',
    adminOverview: 'አጠቃላይ እይታ',
    adminAnalytics: 'ትንተና',
    adminRecentActivity: 'የቅርብ ጊዜ እንቅስቃሴ',
    totalUsers: 'ጠቅላላ ተጠቃሚዎች',
    totalServices: 'ጠቅላላ አገልግሎቶች',
    totalRequests: 'ጠቅላላ ጥያቄዎች',
    satisfaction: 'እርካታ',
    username: 'የተጠቃሚ ስም',
    password: 'ይለፍ ቃል',
    loginBtn: 'ግባ',
    welcomeBack: 'እንኳን በደህና መጡ',
    loginSubtitle: 'ለመቀጠል ይግቡ',
    footerRights: '© 2024 የዳሎቻ ወረዳ አስተዳደር - ሁሉም መብቶች የተጠበቁ ናቸው',
    quickLinks: 'ፈጣን ማገናኛዎች',
    followUs: 'ያስታውሱን',
    search: 'ፈልግ...',
    addNew: 'አዲስ ጨምር',
    edit: 'አርትዕ',
    delete: 'ሰርዝ',
    save: 'አስቀምጥ',
    cancel: 'ሰርዝ',
    confirm: 'አረጋግጥ',
    status: 'ሁኔታ',
    active: 'ንቁ',
    inactive: 'ልኁ',
    pending: 'በመጠባበቅ ላይ',
    completed: 'ተጠናቋል',
    monthlyStats: 'ወርሃዊ ስታቲስቲክስ',
    serviceDistribution: 'የአገልግሎት ስርጭት',
    recentNews: 'የቅርብ ጊዜ ዜና',
    viewAll: 'ሁሉንም ይመልከቱ',
    noData: 'ምንም ውሂብ የለም',
    language: 'ቋንቋ',
    darkMode: 'ጨለማ ሁነታ',
    profile: 'ገጽ',
    notifications: 'ማሳወቂያዎች',
    statistics: 'ስታቲስቲክስ',
    reports: 'ሪፖርቶች',
    calendar: 'ቀን መቁጠሪያ',
    documents: 'ሰነዶች',
    feedback: 'ግብረ መልስ',
    announcements: 'ማስታወቂያዎች',
    events: 'ክስተቶች',
    gallery: 'ማዕከለ ስዕላት',
    faq: 'ተደጋጋሚ ጥያቄዎች',
    privacy: 'የግል መረጃ ፖሊሲ',
    terms: 'የአገልግሎት ውል',
    backToTop: 'ወደ ላይ ተመለስ',
    readMore: 'ተጨማሪ ያንብቡ',
    publishedOn: 'የተለቀቀበት',
    category: 'ምድብ',
    all: 'ሁሉም',
    filter: 'አጣራ',
    sort: 'ደርድር',
    page: 'ገጽ',
    of: 'ከ',
    showing: 'ማሳየት',
    results: 'ውጤቶች',
    loading: 'በመጫን ላይ...',
    success: 'ተሳክቷል!',
    error: 'ስህተት!',
    warning: 'ማስጠንቀቂያ!',
    info: 'መረጃ',
    name: 'ስም',
    email: 'ኢሜይል',
    role: 'ሚና',
    date: 'ቀን',
    action: 'ድርጊት',
    description: 'መግለጫ',
    title: 'ርዕስ',
    content: 'ይዘት',
    image: 'ምስል',
    type: 'ዓይነት',
    location: 'አድራሻ',
    phone: 'ስልክ',
    submit: 'አስገባ',
    reset: 'ዳግም አስጀምር',
    apply: 'አመልክት',
    service: 'አገልግሎት',
    request: 'ጥያቄ',
    approval: 'ፈቃድ',
    renewal: 'እድሳት',
    registration: 'ምዝገባ',
    certificate: 'የምስክር ወረቀት',
    license: 'ፈቃድ',
    permit: 'ፍቃድ',
    inspection: 'ፍተሻ',
    complaint: 'ቅሬታ',
    suggestion: 'የአስተያየት ጥቆማ',
    inquiry: 'ጥያቄ',
    appointment: 'ቀጠሮ',
    download: 'አውርድ',
    print: 'አትም',
    share: 'አጋራ',
    export: 'ላክ',
    import: 'አስገባ',
    refresh: 'አድስ',
    close: 'ዝጋ',
    open: 'ክፈት',
    approve: 'ፈቅድ',
    reject: 'ውድቅ',
    archive: 'ማህደር',
    restore: 'መልስ',
    total: 'ጠቅላላ',
    average: 'አማካይ',
    minimum: 'ዝቅተኛ',
    maximum: 'ከፍተኛ',
    today: 'ዛሬ',
    thisWeek: 'ዚህ ሳምንት',
    thisMonth: 'ዚህ ወር',
    thisYear: 'ዚህ ዓመት',
  },
  en: {
    siteName: 'DALOCHA WOREDA ADMINISTRATION',
    siteNameEn: 'የዳሎቻ ወረዳ አስተዳደር',
    home: 'Home',
    about: 'About',
    services: 'Services',
    news: 'News',
    contact: 'Contact',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
    heroTitle: 'Welcome to Dalocha Woreda Administration',
    heroSubtitle: 'Committed to Public Service Excellence',
    heroBtn: 'Explore Our Services',
    aboutTitle: 'About Dalocha Woreda',
    aboutText: 'Dalocha Woreda is a district located in the South Ethiopia Regional State. The woreda is committed to providing quality services to its people.',
    aboutMission: 'Mission',
    aboutMissionText: 'To provide fair, quality, and accessible government services to all citizens',
    aboutVision: 'Vision',
    aboutVisionText: 'To make Dalocha Woreda a modern, acceptable, and effective administrative system',
    aboutValues: 'Core Values',
    aboutValuesText: 'Transparency, Accountability, Participation, Fairness, and Continuous Service',
    servicesTitle: 'Service Offices',
    servicesSubtitle: '23 Sub-Sector Offices',
    learnMore: 'Learn More',
    newsTitle: 'Latest News',
    contactTitle: 'Contact Us',
    contactAddress: 'Address',
    contactPhone: 'Phone',
    contactEmail: 'Email',
    contactMessage: 'Send us a Message',
    contactName: 'Name',
    contactEmailLabel: 'Email',
    contactSubject: 'Subject',
    contactMsg: 'Message',
    contactSend: 'Send',
    adminDashboard: 'Admin Dashboard',
    adminUsers: 'Users',
    adminServices: 'Services',
    adminNews: 'News',
    adminMessages: 'Messages',
    adminSettings: 'Settings',
    adminOverview: 'Overview',
    adminAnalytics: 'Analytics',
    adminRecentActivity: 'Recent Activity',
    totalUsers: 'Total Users',
    totalServices: 'Total Services',
    totalRequests: 'Total Requests',
    satisfaction: 'Satisfaction',
    username: 'Username',
    password: 'Password',
    loginBtn: 'Login',
    welcomeBack: 'Welcome Back',
    loginSubtitle: 'Sign in to continue',
    footerRights: '© 2024 Dalocha Woreda Administration - All Rights Reserved',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    search: 'Search...',
    addNew: 'Add New',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    completed: 'Completed',
    monthlyStats: 'Monthly Statistics',
    serviceDistribution: 'Service Distribution',
    recentNews: 'Recent News',
    viewAll: 'View All',
    noData: 'No data available',
    language: 'Language',
    darkMode: 'Dark Mode',
    profile: 'Profile',
    notifications: 'Notifications',
    statistics: 'Statistics',
    reports: 'Reports',
    calendar: 'Calendar',
    documents: 'Documents',
    feedback: 'Feedback',
    announcements: 'Announcements',
    events: 'Events',
    gallery: 'Gallery',
    faq: 'FAQ',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    backToTop: 'Back to Top',
    readMore: 'Read More',
    publishedOn: 'Published on',
    category: 'Category',
    all: 'All',
    filter: 'Filter',
    sort: 'Sort',
    page: 'Page',
    of: 'of',
    showing: 'Showing',
    results: 'results',
    loading: 'Loading...',
    success: 'Success!',
    error: 'Error!',
    warning: 'Warning!',
    info: 'Info',
    name: 'Name',
    email: 'Email',
    role: 'Role',
    date: 'Date',
    action: 'Action',
    description: 'Description',
    title: 'Title',
    content: 'Content',
    image: 'Image',
    type: 'Type',
    location: 'Location',
    phone: 'Phone',
    submit: 'Submit',
    reset: 'Reset',
    apply: 'Apply',
    service: 'Service',
    request: 'Request',
    approval: 'Approval',
    renewal: 'Renewal',
    registration: 'Registration',
    certificate: 'Certificate',
    license: 'License',
    permit: 'Permit',
    inspection: 'Inspection',
    complaint: 'Complaint',
    suggestion: 'Suggestion',
    inquiry: 'Inquiry',
    appointment: 'Appointment',
    download: 'Download',
    print: 'Print',
    share: 'Share',
    export: 'Export',
    import: 'Import',
    refresh: 'Refresh',
    close: 'Close',
    open: 'Open',
    approve: 'Approve',
    reject: 'Reject',
    archive: 'Archive',
    restore: 'Restore',
    total: 'Total',
    average: 'Average',
    minimum: 'Minimum',
    maximum: 'Maximum',
    today: 'Today',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    thisYear: 'This Year',
  }
};

const LanguageContext = createContext();
const ThemeContext = createContext();

// ============ 23 SUB-SECTOR OFFICES ============
const subSectorOffices = [
  { id: 1, icon: '🌾', am: 'የግብርና ቢሮ', en: 'Agriculture Office', amDesc: 'የሰብል እና የእንስሳት ምርት ማሻሻል', enDesc: 'Improving crop and livestock production', color: '#22c55e' },
  { id: 2, icon: '🏥', am: 'የጤና ቢሮ', en: 'Health Office', amDesc: 'የህዝብ ጤና አገልግሎት', enDesc: 'Public health services', color: '#ef4444' },
  { id: 3, icon: '📚', am: 'የትምህርት ቢሮ', en: 'Education Office', amDesc: 'ጥራት ያለው ትምህርት ማቅረብ', enDesc: 'Providing quality education', color: '#3b82f6' },
  { id: 4, icon: '💧', am: 'የውሃ እና ኢነርጂ ቢሮ', en: 'Water & Energy Office', amDesc: 'የውሃ አቅርቦት እና ኢነርጂ', enDesc: 'Water supply and energy services', color: '#06b6d4' },
  { id: 5, icon: '💰', am: 'የገቢዎች ቢሮ', en: 'Revenue Office', amDesc: 'ግብር እና ገቢ አሰባሰብ', enDesc: 'Tax and revenue collection', color: '#f59e0b' },
  { id: 6, icon: '🏗️', am: 'የመሬት አስተዳደር ቢሮ', en: 'Land Administration Office', amDesc: 'የመሬት ምዝገባ እና ማረጋገጫ', enDesc: 'Land registration and certification', color: '#8b5cf6' },
  { id: 7, icon: '🏘️', am: 'የከተማ ልማት ቢሮ', en: 'Urban Development Office', amDesc: 'ከተማ ውስጥ ልማት እና ግንባታ', enDesc: 'Urban development and construction', color: '#ec4899' },
  { id: 8, icon: '🏪', am: 'የንግድ እና ኢንዱስትሪ ቢሮ', en: 'Trade & Industry Office', amDesc: 'የንግድ ፈቃድ እና ኢንዱስትሪ ልማት', enDesc: 'Business licensing and industry development', color: '#14b8a6' },
  { id: 9, icon: '👩', am: 'የሴቶች እና ህጻናት ጉዳይ ቢሮ', en: 'Women & Children Affairs', amDesc: 'የሴቶች እና ህጻናት መብት ጥበቃ', enDesc: 'Women and children rights protection', color: '#f43f5e' },
  { id: 10, icon: '⚽', am: 'የወጣቶች እና ስፖርት ቢሮ', en: 'Youth & Sports Office', amDesc: 'የወጣቶች ልማት እና ስፖርት', enDesc: 'Youth development and sports', color: '#84cc16' },
  { id: 11, icon: '🎭', am: 'የባህል እና ቱሪዝም ቢሮ', en: 'Culture & Tourism Office', amDesc: 'ባህል ጥበቃ እና ቱሪዝም ልማት', enDesc: 'Cultural preservation and tourism development', color: '#a855f7' },
  { id: 12, icon: '📊', am: 'የፋይናንስ እና ኢኮኖሚ ልማት ቢሮ', en: 'Finance & Economic Dev.', amDesc: 'በጀት እና ኢኮኖሚ ልማት', enDesc: 'Budget and economic development', color: '#0ea5e9' },
  { id: 13, icon: '⚖️', am: 'የፍትህ ቢሮ', en: 'Justice Office', amDesc: 'ህጋዊ አገልግሎት እና ፍትህ', enDesc: 'Legal services and justice', color: '#6366f1' },
  { id: 14, icon: '🛡️', am: 'የደህንነት ቢሮ', en: 'Security Office', amDesc: 'የህዝብ ደህንነት ጥበቃ', enDesc: 'Public safety and security', color: '#dc2626' },
  { id: 15, icon: '🤝', am: 'የማህበራዊ ጉዳይ ቢሮ', en: 'Social Affairs Office', amDesc: 'ማህበራዊ ድጋፍ እና ልማት', enDesc: 'Social support and development', color: '#f97316' },
  { id: 16, icon: '🛣️', am: 'የመንገድ እና መሰረተ ልማት ቢሮ', en: 'Infrastructure/Roads Office', amDesc: 'መንገድ ግንባታ እና ጥገና', enDesc: 'Road construction and maintenance', color: '#78716c' },
  { id: 17, icon: '📡', am: 'የግንኙነት ጉዳዮች ቢሮ', en: 'Communication Affairs Office', amDesc: 'የህዝብ ግንኙነት እና መረጃ', enDesc: 'Public relations and information', color: '#2563eb' },
  { id: 18, icon: '🆘', am: 'የአደጋ ስጋት አስተዳደር ቢሮ', en: 'Disaster Risk Management', amDesc: 'የአደጋ ዝግጁነት እና ምላሽ', enDesc: 'Disaster preparedness and response', color: '#b91c1c' },
  { id: 19, icon: '🌿', am: 'የአካባቢ ጥበቃ ቢሮ', en: 'Environmental Protection', amDesc: 'የአካባቢ ጥበቃ እና ዘላቂ ልማት', enDesc: 'Environmental conservation and sustainability', color: '#16a34a' },
  { id: 20, icon: '🐄', am: 'የእንስሳት እና ዓሳ ልማት ቢሮ', en: 'Livestock & Fisheries', amDesc: 'የእንስሳት ጤና እና ምርት', enDesc: 'Animal health and production', color: '#ca8a04' },
  { id: 21, icon: '🍽️', am: 'የምግብ ዋስትና ቢሮ', en: 'Food Security Office', amDesc: 'የምግብ ዋስትና ማረጋገጥ', enDesc: 'Ensuring food security', color: '#ea580c' },
  { id: 22, icon: '👔', am: 'የሲቪል ሰርቪስ ቢሮ', en: 'Civil Service Office', amDesc: 'የሰው ኃይል አስተዳደር', enDesc: 'Human resource management', color: '#7c3aed' },
  { id: 23, icon: '📋', am: 'የቀይድ ክስተት ምዝገባ ቢሮ', en: 'Vital Events Registration', amDesc: 'ልደት፣ ሞት፣ ጋብቻ ምዝገባ', enDesc: 'Birth, death, marriage registration', color: '#0d9488' },
];

// ============ MOCK DATA ============
const mockNews = [
  { id: 1, am: { title: 'ዳሎቻ ወረዳ አዲስ የትምህርት ፕሮግራም ጀመረ', body: 'ወረዳው ለሁሉም ዜጎች ጥራት ያለው ትምህርት ለማቅረብ አዲስ ፕሮግራም ጀምሯል።' }, en: { title: 'Dalocha Woreda Launches New Education Program', body: 'The woreda has launched a new program to provide quality education for all citizens.' }, date: '2024-12-01', category: 'education' },
  { id: 2, am: { title: 'የጤና ክትባት ዘመቻ ተጀመረ', body: 'የወረዳው የጤና ቢሮ ለህጻናት ክትባት ዘመቻ ጀምሯል።' }, en: { title: 'Health Vaccination Campaign Started', body: 'The woreda health office has started a vaccination campaign for children.' }, date: '2024-11-28', category: 'health' },
  { id: 3, am: { title: 'አዲስ የመንገድ ግንባታ ፕሮጀክት', body: 'የመሰረተ ልማት ቢሮው አዲስ የመንገድ ግንባታ ፕሮጀክት ጀምሯል።' }, en: { title: 'New Road Construction Project', body: 'The infrastructure office has started a new road construction project.' }, date: '2024-11-25', category: 'infrastructure' },
  { id: 4, am: { title: 'የግብርና ስልጠና ተሰጠ', body: 'ለአካባቢው ገበሬዎች ዘመናዊ የግብርና ቴክኒክ ስልጠና ተሰጠ።' }, en: { title: 'Agriculture Training Provided', body: 'Modern agricultural techniques training was provided to local farmers.' }, date: '2024-11-20', category: 'agriculture' },
  { id: 5, am: { title: 'የውሃ አቅርቦት ፕሮጀክት ተጠናቀቀ', body: 'አዲስ የውሃ አቅርቦት ፕሮጀክት በተሳካ ሁኔታ ተጠናቀቀ።' }, en: { title: 'Water Supply Project Completed', body: 'A new water supply project has been successfully completed.' }, date: '2024-11-15', category: 'water' },
];

const mockUsers = [
  { id: 1, name: 'አበበ በቀለ', email: 'abebe@dalocha.gov.et', role: 'Admin', status: 'active', date: '2024-01-15' },
  { id: 2, name: 'ቸኮል ተሰማ', email: 'chekol@dalocha.gov.et', role: 'Manager', status: 'active', date: '2024-02-20' },
  { id: 3, name: 'ፋትሙ ሀሰን', email: 'fatuma@dalocha.gov.et', role: 'Staff', status: 'active', date: '2024-03-10' },
  { id: 4, name: 'ዳዊት ገብረ', email: 'dawit@dalocha.gov.et', role: 'Staff', status: 'inactive', date: '2024-04-05' },
  { id: 5, name: 'ሰላም አሊ', email: 'selam@dalocha.gov.et', role: 'Manager', status: 'active', date: '2024-05-12' },
];

const mockMessages = [
  { id: 1, name: 'ተስፋዬ ክፍሉ', email: 'tesfaye@gmail.com', subject: 'የመሬት ምዝገባ', message: 'የመሬት ምዝገባ ሂደቱን ማወቅ እፈልጋለሁ', date: '2024-12-01', status: 'pending' },
  { id: 2, name: 'ማርያም ደስታ', email: 'maryam@gmail.com', subject: 'የንግድ ፈቃድ', message: 'የንግድ ፈቃድ ማደስ እፈልጋለሁ', date: '2024-11-30', status: 'completed' },
  { id: 3, name: 'ሙሳ ኢብራሂም', email: 'musa@gmail.com', subject: 'የትምህርት ድጋፍ', message: 'ለልጆቼ የትምህርት ድጋፍ ማግኘት እፈልጋለሁ', date: '2024-11-28', status: 'pending' },
  { id: 4, name: 'ሀና ተክለ', email: 'hana@gmail.com', subject: 'የጤና አገልግሎት', message: 'የጤና ኢንሹራንስ ማወቅ እፈልጋለሁ', date: '2024-11-25', status: 'completed' },
];

const chartData = [
  { month: 'Jan', requests: 120, completed: 95, pending: 25 },
  { month: 'Feb', requests: 150, completed: 130, pending: 20 },
  { month: 'Mar', requests: 180, completed: 155, pending: 25 },
  { month: 'Apr', requests: 140, completed: 120, pending: 20 },
  { month: 'May', requests: 200, completed: 175, pending: 25 },
  { month: 'Jun', requests: 170, completed: 150, pending: 20 },
  { month: 'Jul', requests: 220, completed: 195, pending: 25 },
  { month: 'Aug', requests: 190, completed: 165, pending: 25 },
  { month: 'Sep', requests: 250, completed: 220, pending: 30 },
  { month: 'Oct', requests: 230, completed: 200, pending: 30 },
  { month: 'Nov', requests: 260, completed: 230, pending: 30 },
  { month: 'Dec', requests: 280, completed: 245, pending: 35 },
];

const pieData = [
  { name: 'Agriculture', value: 25, color: '#22c55e' },
  { name: 'Health', value: 20, color: '#ef4444' },
  { name: 'Education', value: 18, color: '#3b82f6' },
  { name: 'Infrastructure', value: 15, color: '#f59e0b' },
  { name: 'Water', value: 12, color: '#06b6d4' },
  { name: 'Others', value: 10, color: '#8b5cf6' },
];

// ============ LOCAL STORAGE DB ============
const DB = {
  get: (key, defaultVal) => {
    try {
      const item = localStorage.getItem(`dalocha_${key}`);
      return item ? JSON.parse(item) : defaultVal;
    } catch { return defaultVal; }
  },
  set: (key, val) => {
    try { localStorage.setItem(`dalocha_${key}`, JSON.stringify(val)); } catch {}
  },
  remove: (key) => {
    try { localStorage.removeItem(`dalocha_${key}`); } catch {}
  }
};

// ============ STYLES ============
const createStyles = (isDark) => ({
  bg: isDark ? '#0f172a' : '#ffffff',
  bgSecondary: isDark ? '#1e293b' : '#f8fafc',
  bgTertiary: isDark ? '#334155' : '#f1f5f9',
  text: isDark ? '#f1f5f9' : '#1e293b',
  textSecondary: isDark ? '#94a3b8' : '#64748b',
  textMuted: isDark ? '#64748b' : '#94a3b8',
  primary: '#1d4ed8',
  primaryLight: '#3b82f6',
  primaryDark: '#1e40af',
  accent: '#f59e0b',
  success: '#22c55e',
  danger: '#ef4444',
  warning: '#f59e0b',
  border: isDark ? '#334155' : '#e2e8f0',
  cardBg: isDark ? '#1e293b' : '#ffffff',
  cardShadow: isDark ? '0 4px 6px -1px rgba(0,0,0,0.4)' : '0 4px 6px -1px rgba(0,0,0,0.1)',
  cardHoverShadow: isDark ? '0 20px 25px -5px rgba(0,0,0,0.5)' : '0 20px 25px -5px rgba(0,0,0,0.1)',
  gradient: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)',
  gradientWarm: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  gradientCool: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  gradientGreen: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
});

// ============ MAIN APP ============
export default function App() {
  const [lang, setLang] = useState(() => DB.get('lang', 'am'));
  const [isDark, setIsDark] = useState(() => DB.get('dark', false));
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(() => DB.get('loggedIn', false));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminTab, setAdminTab] = useState('overview');
  const [users, setUsers] = useState(() => DB.get('users', mockUsers));
  const [news, setNews] = useState(() => DB.get('news', mockNews));
  const [messages, setMessages] = useState(() => DB.get('messages', mockMessages));
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [notification, setNotification] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const t = translations[lang];
  const s = createStyles(isDark);
  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { DB.set('lang', lang); }, [lang]);
  useEffect(() => { DB.set('dark', isDark); }, [isDark]);
  useEffect(() => { DB.set('users', users); }, [users]);
  useEffect(() => { DB.set('news', news); }, [news]);
  useEffect(() => { DB.set('messages', messages); }, [messages]);
  useEffect(() => { DB.set('loggedIn', isLoggedIn); }, [isLoggedIn]);

  const showNotif = useCallback((msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.username === 'admin' && loginForm.password === 'admin') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setPage('admin');
      setLoginForm({ username: '', password: '' });
      showNotif(lang === 'am' ? 'በተሳካ ሁኔታ ገብተዋል!' : 'Login successful!');
    } else {
      showNotif(lang === 'am' ? 'የተሳሳተ መረጃ!' : 'Invalid credentials!', 'error');
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const newMsg = {
      id: messages.length + 1,
      ...contactForm,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setMessages([...messages, newMsg]);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    showNotif(lang === 'am' ? 'መልእክትዎ ተልኳል!' : 'Message sent successfully!');
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
    showNotif(lang === 'am' ? 'ተጠቃሚ ተሰርዟል!' : 'User deleted!');
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(m => m.id !== id));
    showNotif(lang === 'am' ? 'መልእክት ተሰርዟል!' : 'Message deleted!');
  };

  const filteredServices = subSectorOffices.filter(office => {
    const matchSearch = office[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.en.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSearch;
  });

  // ============ RENDER ============
  return (
    <LanguageContext.Provider value={{ lang, t }}>
      <ThemeContext.Provider value={{ isDark, s }}>
        <div style={{
          minHeight: '100vh',
          backgroundColor: s.bg,
          color: s.text,
          fontFamily: "'Noto Sans Ethiopic', 'Inter', sans-serif",
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden'
        }}>
          {/* NOTIFICATION */}
          <AnimatePresence>
            {notification && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                style={{
                  position: 'fixed', top: 20, right: 20, zIndex: 10000,
                  padding: '16px 24px', borderRadius: 12,
                  backgroundColor: notification.type === 'error' ? s.danger : s.success,
                  color: '#fff', fontWeight: 600, fontSize: 14,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  display: 'flex', alignItems: 'center', gap: 8
                }}
              >
                {notification.type === 'error' ? '❌' : '✅'} {notification.msg}
              </motion.div>
            )}
          </AnimatePresence>

          {/* LOGIN MODAL */}
          <AnimatePresence>
            {showLoginModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowLoginModal(false)}
                style={{
                  position: 'fixed', inset: 0, zIndex: 9999,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={e => e.stopPropagation()}
                  style={{
                    backgroundColor: s.cardBg, borderRadius: 20, padding: 40,
                    width: '90%', maxWidth: 420, boxShadow: s.cardHoverShadow
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <div style={{
                      width: 70, height: 70, borderRadius: '50%',
                      background: s.gradient, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', margin: '0 auto 16px', fontSize: 32
                    }}>🔐</div>
                    <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{t.welcomeBack}</h2>
                    <p style={{ color: s.textSecondary, fontSize: 14 }}>{t.loginSubtitle}</p>
                  </div>
                  <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 600, color: s.textSecondary }}>{t.username}</label>
                      <input
                        type="text"
                        value={loginForm.username}
                        onChange={e => setLoginForm({ ...loginForm, username: e.target.value })}
                        placeholder="admin"
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 10,
                          border: `2px solid ${s.border}`, backgroundColor: s.bgSecondary,
                          color: s.text, fontSize: 14, outline: 'none', boxSizing: 'border-box',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={e => e.target.style.borderColor = s.primary}
                        onBlur={e => e.target.style.borderColor = s.border}
                      />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 600, color: s.textSecondary }}>{t.password}</label>
                      <input
                        type="password"
                        value={loginForm.password}
                        onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                        placeholder="admin"
                        style={{
                          width: '100%', padding: '12px 16px', borderRadius: 10,
                          border: `2px solid ${s.border}`, backgroundColor: s.bgSecondary,
                          color: s.text, fontSize: 14, outline: 'none', boxSizing: 'border-box',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={e => e.target.style.borderColor = s.primary}
                        onBlur={e => e.target.style.borderColor = s.border}
                      />
                    </div>
                    <button type="submit" style={{
                      width: '100%', padding: '14px', borderRadius: 10,
                      background: s.gradient, color: '#fff', border: 'none',
                      fontSize: 16, fontWeight: 700, cursor: 'pointer',
                      transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                      onMouseOver={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(29,78,216,0.4)'; }}
                      onMouseOut={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
                    >{t.loginBtn}</button>
                  </form>
                  <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: s.textMuted }}>
                    {lang === 'am' ? 'ለሙከራ: admin / admin' : 'Demo: admin / admin'}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SERVICE DETAIL MODAL */}
          <AnimatePresence>
            {selectedService && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                style={{
                  position: 'fixed', inset: 0, zIndex: 9998,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backdropFilter: 'blur(8px)', padding: 20
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 20 }}
                  onClick={e => e.stopPropagation()}
                  style={{
                    backgroundColor: s.cardBg, borderRadius: 20, padding: 0,
                    width: '100%', maxWidth: 560, overflow: 'hidden',
                    boxShadow: s.cardHoverShadow,
                    maxHeight: '90vh', overflowY: 'auto'
                  }}
                >
                  <div style={{
                    background: `linear-gradient(135deg, ${selectedService.color}22, ${selectedService.color}44)`,
                    padding: '32px 32px 24px', borderBottom: `1px solid ${s.border}`
                  }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>{selectedService.icon}</div>
                    <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4, color: s.text }}>{selectedService[lang]}</h2>
                    <p style={{ color: s.textSecondary, fontSize: 14 }}>{selectedService[lang === 'am' ? 'en' : 'am']}</p>
                  </div>
                  <div style={{ padding: '24px 32px 32px' }}>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: s.textSecondary, marginBottom: 24 }}>
                      {lang === 'am' ? selectedService.amDesc : selectedService.enDesc}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                      {[
                        { icon: '📋', label: lang === 'am' ? 'አገልግሎት ዓይነት' : 'Service Type', value: lang === 'am' ? 'መንግስታዊ' : 'Government' },
                        { icon: '🕐', label: lang === 'am' ? 'የስራ ሰዓት' : 'Working Hours', value: lang === 'am' ? '2:30 - 11:30' : '8:30 AM - 5:30 PM' },
                        { icon: '📍', label: lang === 'am' ? 'ቦታ' : 'Location', value: lang === 'am' ? 'ዳሎቻ ከተማ' : 'Dalocha Town' },
                        { icon: '📞', label: lang === 'am' ? 'ስልክ' : 'Phone', value: '+251-46-XXX-XXXX' },
                      ].map((item, i) => (
                        <div key={i} style={{
                          padding: 12, borderRadius: 10, backgroundColor: s.bgSecondary,
                          border: `1px solid ${s.border}`
                        }}>
                          <div style={{ fontSize: 18, marginBottom: 4 }}>{item.icon}</div>
                          <div style={{ fontSize: 11, color: s.textMuted, marginBottom: 2 }}>{item.label}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: s.text }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <button
                        onClick={() => { setSelectedService(null); setPage('contact'); }}
                        style={{
                          flex: 1, padding: '12px', borderRadius: 10,
                          background: s.gradient, color: '#fff', border: 'none',
                          fontSize: 14, fontWeight: 600, cursor: 'pointer'
                        }}
                      >{lang === 'am' ? 'ያግኙን' : 'Contact Us'}</button>
                      <button
                        onClick={() => setSelectedService(null)}
                        style={{
                          flex: 1, padding: '12px', borderRadius: 10,
                          backgroundColor: s.bgSecondary, color: s.text,
                          border: `2px solid ${s.border}`, fontSize: 14, fontWeight: 600, cursor: 'pointer'
                        }}
                      >{t.close}</button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* NAVBAR */}
          <nav style={{
            position: 'sticky', top: 0, zIndex: 100,
            backgroundColor: isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${s.border}`,
            padding: '16px 5%',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => setPage('home')}>
              <div style={{ 
                width: 40, height: 40, borderRadius: '50%', background: s.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold'
              }}>DW</div>
              <h1 style={{ fontSize: 18, fontWeight: 800, color: s.text, margin: 0, letterSpacing: '-0.5px' }}>
                {t.siteName}
              </h1>
            </div>

            {/* Desktop Menu */}
            <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ display: 'flex', gap: 24, marginRight: 24 }}>
                {['home', 'about', 'services', 'news', 'contact'].map(p => (
                  <button key={p} onClick={() => setPage(p)} style={{
                    background: 'none', border: 'none',
                    color: page === p ? s.primary : s.textSecondary,
                    fontWeight: page === p ? 700 : 500,
                    fontSize: 15, cursor: 'pointer', padding: '8px 0',
                    borderBottom: page === p ? `2px solid ${s.primary}` : '2px solid transparent',
                    transition: 'all 0.2s'
                  }}>
                    {t[p]}
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderLeft: `1px solid ${s.border}`, paddingLeft: 24 }}>
                <button onClick={() => setLang(lang === 'am' ? 'en' : 'am')} style={{
                  background: s.bgSecondary, border: `1px solid ${s.border}`, borderRadius: 20,
                  padding: '6px 12px', color: s.text, cursor: 'pointer', fontSize: 13, fontWeight: 600
                }}>
                  {lang === 'am' ? 'EN' : 'አማ'}
                </button>
                <button onClick={() => setIsDark(!isDark)} style={{
                  background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: s.text
                }}>
                  {isDark ? '☀️' : '🌙'}
                </button>
                
                {isLoggedIn ? (
                  <div style={{ display: 'flex', gap: 12 }}>
                     <button onClick={() => setPage('admin')} style={{
                      background: s.primary, color: '#fff', border: 'none', borderRadius: 8,
                      padding: '8px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer'
                    }}>{t.admin}</button>
                    <button onClick={() => { setIsLoggedIn(false); setPage('home'); }} style={{
                      background: 'transparent', color: s.danger, border: `1px solid ${s.danger}`, borderRadius: 8,
                      padding: '8px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer'
                    }}>{t.logout}</button>
                  </div>
                ) : (
                  <button onClick={() => setShowLoginModal(true)} style={{
                    background: s.gradient, color: '#fff', border: 'none', borderRadius: 8,
                    padding: '8px 16px', fontSize: 14, fontWeight: 600, cursor: 'pointer'
                  }}>{t.login}</button>
                )}
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
              style={{ display: isMobile ? 'block' : 'none', background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: s.text }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </nav>

          {/* MAIN CONTENT */}
          <main style={{ flex: 1, padding: '0 0 60px 0' }}>
            {page === 'home' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {/* Hero */}
                <div style={{
                  background: s.gradient, color: '#fff', padding: '100px 5%',
                  textAlign: 'center', position: 'relative', overflow: 'hidden'
                }}>
                  <div style={{ position: 'relative', zIndex: 2, maxWidth: 800, margin: '0 auto' }}>
                    <motion.h1 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
                      style={{ fontSize: 48, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}
                    >{t.heroTitle}</motion.h1>
                    <motion.p 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                      style={{ fontSize: 20, opacity: 0.9, marginBottom: 32 }}
                    >{t.heroSubtitle}</motion.p>
                    <motion.button 
                      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                      onClick={() => setPage('services')}
                      style={{
                        background: '#fff', color: s.primary, border: 'none', borderRadius: 30,
                        padding: '16px 32px', fontSize: 16, fontWeight: 700, cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                      }}
                    >{t.heroBtn}</motion.button>
                  </div>
                  {/* Decorative background shapes */}
                  <div style={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
                  <div style={{ position: 'absolute', bottom: -50, right: -50, width: 200, height: 200, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
                </div>

                {/* Quick Stats/Features */}
                <div style={{ padding: '60px 5%', display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', marginTop: -40 }}>
                  {[
                    { icon: '🏛️', num: '23', label: t.services },
                    { icon: '👥', num: '120k+', label: lang === 'am' ? 'የህዝብ ብዛት' : 'Population' },
                    { icon: '📈', num: '98%', label: t.satisfaction },
                  ].map((stat, i) => (
                    <motion.div key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 + (i*0.1) }}
                      style={{
                        background: s.cardBg, padding: 32, borderRadius: 20, flex: '1 1 250px',
                        maxWidth: 350, textAlign: 'center', boxShadow: s.cardShadow,
                        border: `1px solid ${s.border}`, position: 'relative', zIndex: 10
                      }}
                    >
                      <div style={{ fontSize: 40, marginBottom: 16 }}>{stat.icon}</div>
                      <div style={{ fontSize: 36, fontWeight: 800, color: s.primary, marginBottom: 8 }}>{stat.num}</div>
                      <div style={{ fontSize: 16, color: s.textSecondary, fontWeight: 600 }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent News Snippet */}
                <div style={{ padding: '60px 5%', backgroundColor: s.bgSecondary }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                    <h2 style={{ fontSize: 32, fontWeight: 800, color: s.text, margin: 0 }}>{t.recentNews}</h2>
                    <button onClick={() => setPage('news')} style={{ 
                      background: 'none', border: 'none', color: s.primary, fontWeight: 700, cursor: 'pointer', fontSize: 16 
                    }}>{t.viewAll} →</button>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                    {news.slice(0, 3).map((item, i) => (
                      <div key={item.id} style={{
                        flex: '1 1 300px', backgroundColor: s.cardBg, borderRadius: 16, padding: 24,
                        boxShadow: s.cardShadow, border: `1px solid ${s.border}`
                      }}>
                        <div style={{ fontSize: 12, color: s.primary, fontWeight: 700, marginBottom: 12, textTransform: 'uppercase' }}>
                          {item.category} • {item.date}
                        </div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: s.text, lineHeight: 1.4 }}>
                          {item[lang].title}
                        </h3>
                        <p style={{ color: s.textSecondary, fontSize: 14, lineHeight: 1.6 }}>
                          {item[lang].body.substring(0, 100)}...
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {page === 'about' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '60px 5%' }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                  <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 24, textAlign: 'center', color: s.text }}>{t.aboutTitle}</h1>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: s.textSecondary, textAlign: 'center', marginBottom: 60 }}>
                    {t.aboutText}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
                    <div style={{ background: s.cardBg, padding: 40, borderRadius: 20, boxShadow: s.cardShadow, border: `1px solid ${s.border}`, textAlign: 'center' }}>
                      <div style={{ fontSize: 48, marginBottom: 24 }}>🎯</div>
                      <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: s.primary }}>{t.aboutMission}</h3>
                      <p style={{ color: s.textSecondary, lineHeight: 1.7 }}>{t.aboutMissionText}</p>
                    </div>
                    <div style={{ background: s.cardBg, padding: 40, borderRadius: 20, boxShadow: s.cardShadow, border: `1px solid ${s.border}`, textAlign: 'center' }}>
                      <div style={{ fontSize: 48, marginBottom: 24 }}>👁️</div>
                      <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: s.accent }}>{t.aboutVision}</h3>
                      <p style={{ color: s.textSecondary, lineHeight: 1.7 }}>{t.aboutVisionText}</p>
                    </div>
                    <div style={{ background: s.cardBg, padding: 40, borderRadius: 20, boxShadow: s.cardShadow, border: `1px solid ${s.border}`, textAlign: 'center' }}>
                      <div style={{ fontSize: 48, marginBottom: 24 }}>💎</div>
                      <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: s.success }}>{t.aboutValues}</h3>
                      <p style={{ color: s.textSecondary, lineHeight: 1.7 }}>{t.aboutValuesText}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {page === 'services' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '60px 5%' }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                  <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 12, color: s.text }}>{t.servicesTitle}</h1>
                  <p style={{ fontSize: 18, color: s.textSecondary, marginBottom: 32 }}>{t.servicesSubtitle}</p>
                  
                  <div style={{ maxWidth: 500, margin: '0 auto', position: 'relative' }}>
                    <input 
                      type="text" 
                      placeholder={t.search}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        width: '100%', padding: '16px 24px', borderRadius: 30,
                        border: `2px solid ${s.border}`, backgroundColor: s.bg,
                        color: s.text, fontSize: 16, outline: 'none',
                        boxShadow: s.cardShadow, transition: 'all 0.3s'
                      }}
                      onFocus={e => e.target.style.borderColor = s.primary}
                      onBlur={e => e.target.style.borderColor = s.border}
                    />
                    <div style={{ position: 'absolute', right: 24, top: 16, fontSize: 18, color: s.textMuted }}>🔍</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                  {filteredServices.map(office => (
                    <motion.div 
                      key={office.id}
                      whileHover={{ y: -5 }}
                      style={{
                        backgroundColor: s.cardBg, borderRadius: 16, padding: 24,
                        boxShadow: s.cardShadow, border: `1px solid ${s.border}`,
                        display: 'flex', flexDirection: 'column', height: '100%'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                        <div style={{ 
                          width: 50, height: 50, borderRadius: 12, 
                          background: `linear-gradient(135deg, ${office.color}22, ${office.color}44)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 
                        }}>
                          {office.icon}
                        </div>
                        <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: s.text }}>{office[lang]}</h3>
                      </div>
                      <p style={{ color: s.textSecondary, fontSize: 14, lineHeight: 1.6, flex: 1, marginBottom: 24 }}>
                        {lang === 'am' ? office.amDesc : office.enDesc}
                      </p>
                      <button 
                        onClick={() => setSelectedService(office)}
                        style={{
                          width: '100%', padding: '12px', borderRadius: 10,
                          backgroundColor: `${office.color}15`, color: office.color,
                          border: `1px solid ${office.color}30`, fontSize: 14, fontWeight: 600,
                          cursor: 'pointer', transition: 'all 0.2s'
                        }}
                        onMouseOver={e => { e.target.style.backgroundColor = office.color; e.target.style.color = '#fff'; }}
                        onMouseOut={e => { e.target.style.backgroundColor = `${office.color}15`; e.target.style.color = office.color; }}
                      >
                        {t.learnMore}
                      </button>
                    </motion.div>
                  ))}
                  {filteredServices.length === 0 && (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: s.textSecondary }}>
                      {t.noData}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {page === 'news' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '60px 5%' }}>
                <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 40, textAlign: 'center', color: s.text }}>{t.newsTitle}</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 800, margin: '0 auto' }}>
                  {news.map(item => (
                    <div key={item.id} style={{
                      backgroundColor: s.cardBg, borderRadius: 16, padding: 32,
                      boxShadow: s.cardShadow, border: `1px solid ${s.border}`
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ 
                          background: `${s.primary}20`, color: s.primary, padding: '4px 12px', 
                          borderRadius: 20, fontSize: 12, fontWeight: 700, textTransform: 'uppercase' 
                        }}>
                          {item.category}
                        </span>
                        <span style={{ color: s.textMuted, fontSize: 14 }}>{item.date}</span>
                      </div>
                      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16, color: s.text }}>{item[lang].title}</h2>
                      <p style={{ color: s.textSecondary, fontSize: 16, lineHeight: 1.7 }}>{item[lang].body}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {page === 'contact' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '60px 5%' }}>
                <h1 style={{ fontSize: 40, fontWeight: 800, marginBottom: 40, textAlign: 'center', color: s.text }}>{t.contactTitle}</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40, maxWidth: 1000, margin: '0 auto' }}>
                  
                  {/* Contact Info */}
                  <div>
                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: s.text }}>{t.info}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      {[
                        { icon: '📍', title: t.contactAddress, detail: lang === 'am' ? 'ዳሎቻ ከተማ፣ ደቡብ ክልል፣ ኢትዮጵያ' : 'Dalocha Town, South Region, Ethiopia' },
                        { icon: '📞', title: t.contactPhone, detail: '+251 46 123 4567' },
                        { icon: '✉️', title: t.contactEmail, detail: 'info@dalocha.gov.et' }
                      ].map((info, i) => (
                        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                          <div style={{ 
                            width: 50, height: 50, borderRadius: 12, backgroundColor: s.bgSecondary,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                            border: `1px solid ${s.border}`
                          }}>{info.icon}</div>
                          <div>
                            <div style={{ fontSize: 14, color: s.textMuted, marginBottom: 4 }}>{info.title}</div>
                            <div style={{ fontSize: 16, fontWeight: 600, color: s.text }}>{info.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Map Placeholder */}
                    <div style={{ 
                      marginTop: 32, height: 200, backgroundColor: s.bgSecondary, borderRadius: 16,
                      border: `1px solid ${s.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: s.textMuted, fontSize: 14
                    }}>
                      [ {lang === 'am' ? 'ካርታ እዚህ ይገባል' : 'Map integration placeholder'} ]
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div style={{ backgroundColor: s.cardBg, padding: 32, borderRadius: 20, boxShadow: s.cardShadow, border: `1px solid ${s.border}` }}>
                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: s.text }}>{t.contactMessage}</h3>
                    <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: s.textSecondary }}>{t.contactName}</label>
                        <input required type="text" value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})}
                          style={{ width: '100%', padding: '12px', borderRadius: 8, border: `1px solid ${s.border}`, backgroundColor: s.bg, color: s.text }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: s.textSecondary }}>{t.contactEmailLabel}</label>
                        <input required type="email" value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})}
                          style={{ width: '100%', padding: '12px', borderRadius: 8, border: `1px solid ${s.border}`, backgroundColor: s.bg, color: s.text }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: s.textSecondary }}>{t.contactSubject}</label>
                        <input required type="text" value={contactForm.subject} onChange={e => setContactForm({...contactForm, subject: e.target.value})}
                          style={{ width: '100%', padding: '12px', borderRadius: 8, border: `1px solid ${s.border}`, backgroundColor: s.bg, color: s.text }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 600, color: s.textSecondary }}>{t.contactMsg}</label>
                        <textarea required rows={4} value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})}
                          style={{ width: '100%', padding: '12px', borderRadius: 8, border: `1px solid ${s.border}`, backgroundColor: s.bg, color: s.text, resize: 'vertical' }}
                        />
                      </div>
                      <button type="submit" style={{
                        marginTop: 8, padding: '14px', borderRadius: 8, background: s.gradient,
                        color: '#fff', border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer'
                      }}>{t.contactSend}</button>
                    </form>
                  </div>

                </div>
              </motion.div>
            )}

            {page === 'admin' && isLoggedIn && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ padding: '40px 5%', display: 'flex', gap: 32, flexDirection: 'row', flexWrap: 'wrap' }}>
                
                {/* Admin Sidebar */}
                <div style={{ flex: '1 1 250px', maxWidth: 300 }}>
                  <div style={{ backgroundColor: s.cardBg, borderRadius: 16, padding: 24, boxShadow: s.cardShadow, border: `1px solid ${s.border}` }}>
                    <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24, color: s.text }}>{t.adminDashboard}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {[
                        { id: 'overview', icon: '📊', label: t.adminOverview },
                        { id: 'users', icon: '👥', label: t.adminUsers },
                        { id: 'messages', icon: '✉️', label: t.adminMessages },
                      ].map(tab => (
                        <button key={tab.id} onClick={() => setAdminTab(tab.id)} style={{
                          display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '12px 16px',
                          borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 15, fontWeight: 600,
                          backgroundColor: adminTab === tab.id ? `${s.primary}20` : 'transparent',
                          color: adminTab === tab.id ? s.primary : s.textSecondary,
                          transition: 'all 0.2s', textAlign: 'left'
                        }}>
                          <span style={{ fontSize: 18 }}>{tab.icon}</span> {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Admin Content */}
                <div style={{ flex: '3 1 600px' }}>
                  
                  {adminTab === 'overview' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                        <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow }}>
                          <div style={{ color: s.textSecondary, fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{t.totalUsers}</div>
                          <div style={{ fontSize: 32, fontWeight: 800, color: s.text }}>{users.length}</div>
                        </div>
                        <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow }}>
                          <div style={{ color: s.textSecondary, fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{t.adminMessages}</div>
                          <div style={{ fontSize: 32, fontWeight: 800, color: s.text }}>{messages.length}</div>
                        </div>
                        <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow }}>
                          <div style={{ color: s.textSecondary, fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{t.totalServices}</div>
                          <div style={{ fontSize: 32, fontWeight: 800, color: s.text }}>23</div>
                        </div>
                      </div>

                      <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: s.text }}>{t.monthlyStats}</h3>
                        <div style={{ height: 300 }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                              <CartesianGrid strokeDasharray="3 3" stroke={s.border} />
                              <XAxis dataKey="month" stroke={s.textSecondary} />
                              <YAxis stroke={s.textSecondary} />
                              <Tooltip contentStyle={{ backgroundColor: s.cardBg, borderColor: s.border, color: s.text }} />
                              <Legend />
                              <Line type="monotone" dataKey="requests" stroke={s.primary} strokeWidth={3} />
                              <Line type="monotone" dataKey="completed" stroke={s.success} strokeWidth={3} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>

                      <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow }}>
                        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: s.text }}>{t.serviceDistribution}</h3>
                        <div style={{ height: 300 }}>
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie data={pieData} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={5} dataKey="value">
                                {pieData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip contentStyle={{ backgroundColor: s.cardBg, borderColor: s.border, color: s.text }} />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  )}

                  {adminTab === 'users' && (
                    <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow, overflowX: 'auto' }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: s.text }}>{t.adminUsers}</h3>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: `2px solid ${s.border}`, color: s.textSecondary }}>
                            <th style={{ padding: '12px 8px' }}>{t.name}</th>
                            <th style={{ padding: '12px 8px' }}>{t.email}</th>
                            <th style={{ padding: '12px 8px' }}>{t.role}</th>
                            <th style={{ padding: '12px 8px' }}>{t.status}</th>
                            <th style={{ padding: '12px 8px' }}>{t.action}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map(u => (
                            <tr key={u.id} style={{ borderBottom: `1px solid ${s.border}` }}>
                              <td style={{ padding: '16px 8px', color: s.text, fontWeight: 600 }}>{u.name}</td>
                              <td style={{ padding: '16px 8px', color: s.textSecondary }}>{u.email}</td>
                              <td style={{ padding: '16px 8px', color: s.text }}>
                                <span style={{ background: s.bgSecondary, padding: '4px 8px', borderRadius: 4, fontSize: 12 }}>{u.role}</span>
                              </td>
                              <td style={{ padding: '16px 8px' }}>
                                <span style={{ color: u.status === 'active' ? s.success : s.danger, fontWeight: 700, fontSize: 12, textTransform: 'uppercase' }}>
                                  {u.status === 'active' ? t.active : t.inactive}
                                </span>
                              </td>
                              <td style={{ padding: '16px 8px' }}>
                                <button onClick={() => handleDeleteUser(u.id)} style={{
                                  background: 'none', border: 'none', color: s.danger, cursor: 'pointer', fontSize: 14, fontWeight: 600
                                }}>{t.delete}</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {adminTab === 'messages' && (
                    <div style={{ backgroundColor: s.cardBg, padding: 24, borderRadius: 16, border: `1px solid ${s.border}`, boxShadow: s.cardShadow, overflowX: 'auto' }}>
                      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: s.text }}>{t.adminMessages}</h3>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: `2px solid ${s.border}`, color: s.textSecondary }}>
                            <th style={{ padding: '12px 8px' }}>{t.name}</th>
                            <th style={{ padding: '12px 8px' }}>{t.contactSubject}</th>
                            <th style={{ padding: '12px 8px' }}>{t.date}</th>
                            <th style={{ padding: '12px 8px' }}>{t.status}</th>
                            <th style={{ padding: '12px 8px' }}>{t.action}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {messages.map(m => (
                            <tr key={m.id} style={{ borderBottom: `1px solid ${s.border}` }}>
                              <td style={{ padding: '16px 8px', color: s.text, fontWeight: 600 }}>
                                {m.name}<br/><span style={{ fontSize: 12, color: s.textMuted, fontWeight: 400 }}>{m.email}</span>
                              </td>
                              <td style={{ padding: '16px 8px', color: s.text }}>{m.subject}</td>
                              <td style={{ padding: '16px 8px', color: s.textSecondary }}>{m.date}</td>
                              <td style={{ padding: '16px 8px' }}>
                                <span style={{ 
                                  color: m.status === 'completed' ? s.success : s.warning, 
                                  backgroundColor: m.status === 'completed' ? `${s.success}20` : `${s.warning}20`,
                                  padding: '4px 8px', borderRadius: 12, fontWeight: 700, fontSize: 12, textTransform: 'uppercase' 
                                }}>
                                  {m.status === 'completed' ? t.completed : t.pending}
                                </span>
                              </td>
                              <td style={{ padding: '16px 8px' }}>
                                <button onClick={() => handleDeleteMessage(m.id)} style={{
                                  background: 'none', border: 'none', color: s.danger, cursor: 'pointer', fontSize: 14, fontWeight: 600
                                }}>{t.delete}</button>
                              </td>
                            </tr>
                          ))}
                          {messages.length === 0 && (
                            <tr><td colSpan="5" style={{ textAlign: 'center', padding: 24, color: s.textSecondary }}>{t.noData}</td></tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>
              </motion.div>
            )}
          </main>

          {/* FOOTER */}
          <footer style={{
            backgroundColor: isDark ? '#0f172a' : '#1e293b',
            color: '#94a3b8', padding: '60px 5% 24px',
            borderTop: `1px solid ${isDark ? '#1e293b' : '#334155'}`,
            marginTop: 'auto'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 40 }}>
              <div>
                <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 700, marginBottom: 16 }}>{t.siteName}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6 }}>{t.heroSubtitle}</p>
              </div>
              <div>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 16 }}>{t.quickLinks}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['home', 'about', 'services', 'contact'].map(p => (
                    <span key={p} onClick={() => setPage(p)} style={{ cursor: 'pointer', fontSize: 14, transition: 'color 0.2s' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#94a3b8'}>
                      {t[p]}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700, marginBottom: 16 }}>{t.contactTitle}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
                  <span>📍 Dalocha Town, Ethiopia</span>
                  <span>📞 +251 46 123 4567</span>
                  <span>✉️ info@dalocha.gov.et</span>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', paddingTop: 24, borderTop: '1px solid #334155', fontSize: 13 }}>
              {t.footerRights}
            </div>
          </footer>
        </div>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}