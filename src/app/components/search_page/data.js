import { ShoppingBag, Newspaper, SquarePlay, SquareGanttChart, LoaderPinwheel, FileQuestion, RssIcon } from "lucide-react"

import Dark1 from '@/public/images/backgrounds/dark/texture1.jpg'
import Dark2 from '@/public/images/backgrounds/dark/texture2.jpg'
import Dark3 from '@/public/images/backgrounds/dark/texture3.jpg'
import Light1 from '@/public/images/backgrounds/light/texture1.jpg'
import Light2 from '@/public/images/backgrounds/light/texture2.jpg'
import Light3 from '@/public/images/backgrounds/light/texture3.jpg'

import Avatar1 from '@/public/images/backgrounds/avatar/pic1.jpg'
import Avatar2 from '@/public/images/backgrounds/avatar/pic2.jpg'
import Avatar3 from '@/public/images/backgrounds/avatar/pic3.jpg'
import Avatar4 from '@/public/images/backgrounds/avatar/pic4.jpg'
import Avatar5 from '@/public/images/backgrounds/avatar/pic5.jpg'
import Avatar6 from '@/public/images/backgrounds/avatar/pic6.jpg'

const blogsCards = [
    {
        type: 'blogs', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'blogs', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'blogs', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'blogs', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'blogs', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
]
const newsCards = [
    {
        type: 'news', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'news', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'news', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'news', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'news', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
]
const howCards = [
    {
        type: 'how', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'how', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'how', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'how', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        type: 'how', 
        title: "الذكاء الاصطناعي يحمل شعلة الأولمبياد", 
        desc: "الألعاب الأولمبية، ذلك الحدث العالمي الذي يترقبه المليارات كل أربع سنوات، يعود مجددًا ليبهر العالم. ومنذ آخر دورة أولمبية في عام 2020، شهد العالم تحولًا جذريًا مع ظهور الجيل الجديد من الذكاء الاصطناعي، الذي بدأ في إحداث تغييرات عميقة في مختلف جوانب حياتنا.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
]
const productsCards = [
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        type: 'products', 
        title: "Lenovo G25-20 24.5 Inch FHD TN 165Hz 0.5ms Gaming Monitor - Black", 
        price: "9169",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
]
const videosCards = [
    {
        type: 'videos', 
        title: "عشان اللاب توب بتاعك يفضل جديد والبطارية متبوظش! 🔴 إعدادات لازم تعملها فورًا مع اللابتوب بتاعك", 
        url: "https://www.youtube.com/watch?v=XBqmzxYBt3M",
        youtubeId: "XBqmzxYBt3M",
        imgUrl: `https://img.youtube.com/vi/XBqmzxYBt3M/maxresdefault.jpg`,
    },
    {
        type: 'videos', 
        title: "عشان اللاب توب بتاعك يفضل جديد والبطارية متبوظش! 🔴 إعدادات لازم تعملها فورًا مع اللابتوب بتاعك", 
        url: "https://www.youtube.com/watch?v=XBqmzxYBt3M",
        youtubeId: "XBqmzxYBt3M",
        imgUrl: `https://img.youtube.com/vi/XBqmzxYBt3M/maxresdefault.jpg`,
    },
    {
        type: 'videos', 
        title: "عشان اللاب توب بتاعك يفضل جديد والبطارية متبوظش! 🔴 إعدادات لازم تعملها فورًا مع اللابتوب بتاعك", 
        url: "https://www.youtube.com/watch?v=XBqmzxYBt3M",
        youtubeId: "XBqmzxYBt3M",
        imgUrl: `https://img.youtube.com/vi/XBqmzxYBt3M/maxresdefault.jpg`,
    },
    {
        type: 'videos', 
        title: "عشان اللاب توب بتاعك يفضل جديد والبطارية متبوظش! 🔴 إعدادات لازم تعملها فورًا مع اللابتوب بتاعك", 
        url: "https://www.youtube.com/watch?v=XBqmzxYBt3M",
        youtubeId: "XBqmzxYBt3M",
        imgUrl: `https://img.youtube.com/vi/XBqmzxYBt3M/maxresdefault.jpg`,
    },
]
const reviewsCards = [
    {
        type: 'reviews', 
        title: "مراجعة جهاز ASUS ROG NUC 970 الصغير للألعاب", 
        desc: "نعود مرةً أخرى إلى أجهزة الكمبيوتر الصغيرة، والتي يمكن أن نقول إنها محمولة إلى حدٍ ما، كما أنها أيضًا لا تأخذ مساحة كبيرة من مكتبك. هذا كان عمل Intel في الماضي، والتي كانت تنتج أجهزة NUC الصغيرة تلك، حتى باعت كل أصول عملياتها في هذا المجال لـ ASUS، والتي أرسلت لنا أول جهاز ألعاب من هذه الفئة، وهو ROG NUC 970.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-08/66ad011701241.asus-rog-nuc-970-1.jpgmain66ad01170bfae.webp"
    },
    {
        type: 'reviews', 
        title: "مراجعة جهاز ASUS ROG NUC 970 الصغير للألعاب", 
        desc: "نعود مرةً أخرى إلى أجهزة الكمبيوتر الصغيرة، والتي يمكن أن نقول إنها محمولة إلى حدٍ ما، كما أنها أيضًا لا تأخذ مساحة كبيرة من مكتبك. هذا كان عمل Intel في الماضي، والتي كانت تنتج أجهزة NUC الصغيرة تلك، حتى باعت كل أصول عملياتها في هذا المجال لـ ASUS، والتي أرسلت لنا أول جهاز ألعاب من هذه الفئة، وهو ROG NUC 970.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-08/66ad011701241.asus-rog-nuc-970-1.jpgmain66ad01170bfae.webp"
    },
    {
        type: 'reviews', 
        title: "مراجعة جهاز ASUS ROG NUC 970 الصغير للألعاب", 
        desc: "نعود مرةً أخرى إلى أجهزة الكمبيوتر الصغيرة، والتي يمكن أن نقول إنها محمولة إلى حدٍ ما، كما أنها أيضًا لا تأخذ مساحة كبيرة من مكتبك. هذا كان عمل Intel في الماضي، والتي كانت تنتج أجهزة NUC الصغيرة تلك، حتى باعت كل أصول عملياتها في هذا المجال لـ ASUS، والتي أرسلت لنا أول جهاز ألعاب من هذه الفئة، وهو ROG NUC 970.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-08/66ad011701241.asus-rog-nuc-970-1.jpgmain66ad01170bfae.webp"
    },
    {
        type: 'reviews', 
        title: "مراجعة جهاز ASUS ROG NUC 970 الصغير للألعاب", 
        desc: "نعود مرةً أخرى إلى أجهزة الكمبيوتر الصغيرة، والتي يمكن أن نقول إنها محمولة إلى حدٍ ما، كما أنها أيضًا لا تأخذ مساحة كبيرة من مكتبك. هذا كان عمل Intel في الماضي، والتي كانت تنتج أجهزة NUC الصغيرة تلك، حتى باعت كل أصول عملياتها في هذا المجال لـ ASUS، والتي أرسلت لنا أول جهاز ألعاب من هذه الفئة، وهو ROG NUC 970.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-08/66ad011701241.asus-rog-nuc-970-1.jpgmain66ad01170bfae.webp"
    },
    {
        type: 'reviews', 
        title: "مراجعة جهاز ASUS ROG NUC 970 الصغير للألعاب", 
        desc: "نعود مرةً أخرى إلى أجهزة الكمبيوتر الصغيرة، والتي يمكن أن نقول إنها محمولة إلى حدٍ ما، كما أنها أيضًا لا تأخذ مساحة كبيرة من مكتبك. هذا كان عمل Intel في الماضي، والتي كانت تنتج أجهزة NUC الصغيرة تلك، حتى باعت كل أصول عملياتها في هذا المجال لـ ASUS، والتي أرسلت لنا أول جهاز ألعاب من هذه الفئة، وهو ROG NUC 970.",
        imgUrl: "https://arabhardware.net/storage/uploads/2024-08/66ad011701241.asus-rog-nuc-970-1.jpgmain66ad01170bfae.webp"
    },

]

export const tashkelaCards = [
    {
        isDummy: true,
        type: 'blogs', 
        title:'', 
        desc: '',
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        isDummy: true,
        type: 'products', 
        title:'', 
        price: "",
        inStock: true,
        imgUrl: "https://ahw.store/image/cache/catalog/Catalog/Products/Monitors/LEN-MNT-G25-20/Lenovo%20G25-20%2024.5%20inch%20TN-3-550x550w.jpg"
    },
    {
        isDummy: true,
        type: 'videos', 
        title:'', 
        imgUrl: `https://img.youtube.com/vi/XBqmzxYBt3M/maxresdefault.jpg`,
    },
    {
        isDummy: true,
        type: 'news', 
        title:'', 
        desc: '',
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
    {
        isDummy: true,
        type: 'reviews', 
        title:'', 
        desc: '',
        imgUrl: "https://arabhardware.net/storage/uploads/2024-08/66ad011701241.asus-rog-nuc-970-1.jpgmain66ad01170bfae.webp"
    },
    {
        isDummy: true,
        type: 'how', 
        title:'', 
        desc: '',
        imgUrl: "https://arabhardware.net/storage/uploads/2024-07/66a514cd917fe.meta-47.pngmedium_large66a514cda1a5a.webp"
    },
]

export const searchData = [ 
    {
        id: "all", label: "الجميع", link: "/search?for=",
        desc: "ابحث عن كل ماترغب", icon: LoaderPinwheel, 
        bgImg: {'dark': Dark1, 'light': Light1},
        backgroundImgDark: Dark1, backgroundImg: Light1, 
        cards: newsCards.concat(productsCards, videosCards, blogsCards, reviewsCards, howCards)
    },
    {
        id: "news", label: "الأخبار", link: "/search?for=الأخبار",
        desc: "ابحث عن احدث الأخبار", icon: RssIcon, 
        backgroundImgDark: Dark2, backgroundImg: Light2, 
        bgImg: {'dark': Dark2, 'light': Light2},
        cards: newsCards
    },
    {
        id: "products", label: "المتجر", link: "/search?for=المتجر",
        desc: "ابحث عن منتجات في المتجر", icon: ShoppingBag,
        backgroundImgDark: Dark3, backgroundImg: Light3, 
        bgImg: {'dark': Dark3, 'light': Light3},
        cards: productsCards
    },
    {
        id: "videos", label: "الفيديوهات", link: "/search?for=الفيديوهات",
        desc: "ابحث عن احدث الفيديوهات", icon: SquarePlay, 
        backgroundImgDark: Dark1, backgroundImg: Light1, 
        bgImg: {'dark': Dark1, 'light': Light1},
        cards: videosCards
    },
    {
        id: "blogs", label: "المقالات", link: "/search?for=المقالات",
        desc: "ابحث عن احدث المقالات", icon: Newspaper, 
        backgroundImgDark: Dark2, backgroundImg: Light2, 
        bgImg: {'dark': Dark2, 'light': Light2},
        cards: blogsCards
    },
    {
        id: "reviews", label: "المراجعات", link: "/search?for=المراجعات",
        desc: "ابحث عن احدث المراجعات", icon: SquareGanttChart, 
        backgroundImgDark: Dark2, backgroundImg: Light2, 
        bgImg: {'dark': Dark2, 'light': Light2},
        cards: reviewsCards
    },
    {
        id: "how", label: "كيف", link: "/search?for=كيف",
        desc: "ابحث عن الدروس التعليمية", icon: FileQuestion, 
        backgroundImgDark: Dark2, backgroundImg: Light2, 
        bgImg: {'dark': Dark2, 'light': Light2},
        cards: howCards
    },
]

export const trendingData = {
    title: "الاكثر رواجاً",
    subjects: [
        "دونالد ترمب",
        "غزة الآن",
        "الحرب الروسية الأوكرانية",
        "فئران فرنسا",
    ]
}
export const tagsData = {
    title: "الأوسمة",
    subjects: [
        "دونالد ترمب",
        "غزة الآن",
        "الحرب الروسية الأوكرانية",
        "فئران فرنسا",
        "محتجي بريطانيا",
        "روبرت ف كيندي",
        "ايمان خليفة",
        "العشاء الأخير",
        "ايران",
        "تشيرنوبل"
    ]
}

export const statusData = [
    {img: Avatar1, url: '#'},
    {img: Avatar2, url: '#'},
    {img: Avatar3, url: '#'},
    {img: Avatar4, url: '#'},
    {img: Avatar5, url: '#'},
    {img: Avatar6, url: '#'},
    {img: Avatar1, url: '#'},
    {img: Avatar2, url: '#'},
    {img: Avatar3, url: '#'},
    {img: Avatar4, url: '#'},
    {img: Avatar5, url: '#'},
    {img: Avatar6, url: '#'},
    {img: Avatar1, url: '#'},
    {img: Avatar2, url: '#'},
    {img: Avatar3, url: '#'},
    {img: Avatar4, url: '#'},
    {img: Avatar5, url: '#'},
    {img: Avatar6, url: '#'},
]

export const cardData = {
    defaultSelected: { "news": true, "products": true, "videos": true, "blogs": true, "reviews": true, "how": true },
    titles: {
        news: "أحدث الأخبار", 
        products: "أحدث المنتجات", 
        videos: "أحدث الفيديوهات", 
        blogs:  "أحدث المقالات", 
        reviews: "أحدث المراجعات",
        how: "كيف؟",
    },
    links: {
        news: "https://arabhardware.net/news",
        products: "https://ahw.store",
        videos: "https://www.youtube.com/@Arabhardware",
        blogs: "https://arabhardware.net/articles",
        reviews: "https://arabhardware.net/reviews",
        how: "https://arabhardware.net/how",
    }
}

export const sectoinColors = {
    news: {text: 'text-prime', bg: 'bg-prime', textSelected: 'group-data-[selected=true]:text-prime'},
    products: {text: 'text-forth', bg: 'bg-forth', textSelected: 'group-data-[selected=true]:text-forth'},
    videos: {text: 'text-fifth', bg: 'bg-fifth', textSelected: 'group-data-[selected=true]:text-fifth'},
    blogs: {text: 'text-secondary', bg: 'bg-secondary', textSelected: 'group-data-[selected=true]:text-secondary'},
    reviews: {text: 'text-tritory', bg: 'bg-tritory', textSelected: 'group-data-[selected=true]:text-tritory'},
    how: {text: 'text-sixth', bg: 'bg-sixth', textSelected: 'group-data-[selected=true]:text-sixth'},
}