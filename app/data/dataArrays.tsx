export const categories = [
    {
        id: 3,
        name: '点心甜品',
        photo_url:
            'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
    },
    {
        id: 1,
        name: '川菜',
        photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
    },
    {
        id: 2,
        name: '粤菜',
        photo_url:
            'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
        id: 4,
        name: '汤品',
        photo_url:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
    },
    {
        id: 0,
        name: '面食',
        photo_url: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1000&q=80'
    },
];

export const recipes = [
    {
        recipeId: 122,
        categoryId: 3,
        title: '桂花糖藕',
        photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
            "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
            'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
            'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
            'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
        ],
        time: '15',
        ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
        description:
            '-- 将新鲜莲藕洗净，去皮后切成薄片，厚度约3-5毫米。切好的藕片立即放入清水中浸泡，防止氧化变黑。\n\n -- 锅中加入适量清水，大火烧开后放入藕片，焯水2-3分钟至半透明状态即可捞出。\n\n -- 准备糖浆：在锅中加入适量的白糖和清水，小火慢慢熬煮至糖完全溶解，形成透明糖浆。\n\n -- 将焯好水的藕片放入糖浆中，小火慢煮10分钟左右，让藕片充分吸收糖浆。最后撒上桂花，搅拌均匀即可。\n\n -- 煮好的桂花糖藕可以趁热食用，也可以放凉后食用，口感更加清甜爽脆。'
    },
    {
        recipeId: 3,
        categoryId: 4,
        title: '银耳莲子羹',
        photo_url:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
        photosArray: [
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
            'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
            'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
        ],
        time: '10',
        ingredients: [
            [59, '1'],
            [60, '1/2 lbs'],
            [61, '1/2 liters'],
        ],
        description: '将所有食材放入锅中，加入适量清水，大火煮沸后转小火慢炖至银耳软糯，莲子熟透。可根据个人口味加入冰糖调味，趁热享用，营养丰富，滋润养颜。'
    },
    {
        recipeId: 2,
        categoryId: 3,
        title: '绿豆糕',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
            'https://ichef.bbci.co.uk/news/660/cpsprodpb/B2C0/production/_106106754_vegnuggets976.jpg',
            'https://pixel.nymag.com/imgs/daily/grub/2017/11/22/22-mcds-chicken-tenders.w330.h330.jpg',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fgettyimages-508510211.jpg%3Fitok%3Dh-Uryi8r&w=400&c=sc&poi=face&q=85'
        ],
        time: '30',
        ingredients: [
            [0, '2 quarts'],
            [16, '1'],
            [12, '1 cup'],
            [18, '1 cup'],
            [19, '1 teaspoon'],
            [1, '2 teaspoons'],
            [4, '1/4 teaspoons'],
            [7, '1/8 teaspoons'],
            [20, '1/2 teaspoons'],
            [21, '4']
        ],
        description:
            '-- 将绿豆提前浸泡一夜，然后蒸熟。将蒸好的绿豆用勺子压成泥状，过筛使其更加细腻。\n\n -- 在锅中加入适量的食用油，小火加热后倒入绿豆泥，不断翻炒至水分收干，绿豆泥变得细腻光滑。\n\n -- 根据个人口味加入适量白糖，继续翻炒至糖完全融化，绿豆泥呈团状。\n\n -- 将炒好的绿豆泥分成小份，搓成圆球状，然后放入模具中压制成型。\n\n -- 将成型的绿豆糕取出，放凉后即可食用。口感细腻，甜而不腻，是夏日消暑佳品。'
    },
    {
        recipeId: 3,
        categoryId: 3,
        title: '红豆沙月饼',
        photo_url:
            'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
            'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
            'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
            'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
        ],
        time: '45',
        ingredients: [
            [0, '2 tablespoons'],
            [22, '1/2'],
            [23, '2 tablespoons'],
            [7, '2 cloves'],
            [3, '1 teaspoon'],
            [24, '1 tablespoon'],
            [25, '1 lb'],
            [1, '2 teaspoons'],
            [4, '2 teaspoons'],
            [26, '15 oz'],
            [27, '8'],
            [28, '2'],
            [29, '1 cup']
        ],
        description:
            '-- 将红豆提前浸泡4小时以上，然后放入锅中加水煮至软烂。将煮好的红豆用搅拌机打成泥状，过筛去除豆皮。\n\n -- 在平底锅中加入适量食用油，小火加热后倒入红豆泥，不断翻炒至水分收干。根据个人口味加入白糖，继续翻炒至糖完全融化，红豆沙呈团状即可。\n\n -- 制作月饼皮：将中筋面粉、转化糖浆、花生油和枧水混合，揉成光滑的面团，静置松弛2小时。\n\n -- 将面团分成小份，包入适量的红豆沙馅料，收口捏紧。放入月饼模具中压制成型。\n\n -- 将成型的月饼放在烤盘上，表面刷上蛋黄液，放入预热好的烤箱中，180度烤制20分钟左右至表面金黄即可。'
    },
    {
        recipeId: 1,
        categoryId: 3,
        title: '芝麻糊',
        photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
        photosArray: [
            'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
            'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
            'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
            'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
        ],
        time: '30',
        ingredients: [
            [1, '2 tablespoons'],
            [3, '1 tablespoon'],
            [4, '1 teaspoon'],
            [5, '1/2 teaspoons'],
            [6, '1/2 teaspoons'],
            [7, '1/2 teaspoons'],
            [8, '1/2 teaspoons'],
            [9, '1/2 teaspoons'],
            [10, '1/2 teaspoons'],
            [11, '1/2 teaspoons'],
            [12, '1/2 cups'],
            [13, '1 tablespoon'],
            [14, '1 tablespoon'],
            [15, '2 breasts, 2 thighs, 2 drumsticks, 2 wings'],
            [16, '1'],
            [17, '2 quarts']
        ],
        description:
            '-- 将黑芝麻洗净，沥干水分后放入平底锅中，小火慢慢炒香至芝麻散发出香味，注意不要炒焦。炒好的芝麻放凉备用。\n\n -- 将炒好的芝麻和适量的糯米粉一起放入料理机中，打成细腻的粉末状。过筛使粉末更加细腻均匀。\n\n -- 在锅中加入适量清水，大火烧开后转小火。将芝麻粉慢慢倒入锅中，边倒边搅拌，防止结块。\n\n -- 继续小火煮制，不断搅拌至芝麻糊变得浓稠顺滑。根据个人口味加入适量白糖，搅拌均匀。\n\n -- 煮好的芝麻糊可以趁热食用，也可以放凉后食用。口感香甜浓郁，营养丰富，是传统的中式甜品。'
    },
    {
        recipeId: 4,
        categoryId: 1,
        title: '麻婆豆腐',
        photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
        photosArray: [
            'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
            'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
            'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
        ],
        time: '35',
        ingredients: [
            [30, 'jucie of 1 '],
            [24, '2 teaspoons'],
            [0, '3 tablespoons'],
            [3, '1 teaspoon'],
            [31, '1/2 teaspoons'],
            [32, '1/2 teaspoons'],
            [4, '2 teaspoons'],
            [33, '1/2 lb'],
            [27, '8'],
            [14, '2 teasponns'],
            [34, '1']
        ],
        description:
            '-- 将嫩豆腐切成2厘米见方的小块，放入淡盐水中浸泡10分钟，这样可以去除豆腥味并保持豆腐形状。将牛肉末用料酒、生抽、少量盐腌制15分钟。\n\n -- 在锅中加入适量食用油，小火加热后放入郫县豆瓣酱，炒出红油。加入牛肉末炒散，再加入蒜末、姜末和花椒粉，炒出香味。\n\n -- 加入适量清水或高汤，大火烧开后放入豆腐块，轻轻推动防止粘锅。加入生抽、老抽和少许白糖调味，转小火慢炖5分钟让豆腐入味。\n\n -- 用水淀粉勾芡，分2-3次加入，每次都要轻轻推动，让汤汁浓稠。最后撒上葱花和花椒粉即可出锅。\n\n -- 装盘后趁热享用，口感麻辣鲜香，豆腐嫩滑，是经典的川菜代表。'
    },
    {
        recipeId: 5,
        categoryId: 1,
        title: '宫保鸡丁',
        photo_url:
            'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
        photosArray: [
            'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
            'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
            'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
        ],
        time: 35,
        ingredients: [
            [9, '1/2 teaspoons'],
            [0, '4 tablespoons'],
            [1, '1/2 teaspoons'],
            [30, '2 tablespoons'],
            [31, '1 teaspoon'],
            [7, '1 teaspoon'],
            [24, '1/2 teaspoons'],
            [3, '1/2 teaspoons'],
            [21, '1 pound'],
            [22, '1/2 cup'],
            [27, '6'],
            [36, '4'],
            [37, '1/2'],
            [38, '1/2']
        ],
        description:
            '-- 将鸡胸肉切成1.5厘米见方的小丁，用料酒、生抽、少许盐和淀粉腌制20分钟。花生米提前炸好放凉备用。将干辣椒剪成小段，去掉辣椒籽。\n\n -- 调制宫保汁：将生抽、老抽、陈醋、白糖、料酒和少量水淀粉混合均匀备用。在锅中加入适量食用油，大火加热至七成热，下入鸡丁快速滑炒至变色后盛起。\n\n -- 锅中留底油，小火下入花椒粒炒出香味后捞出。放入干辣椒段和葱段炒香，再加入姜蒜末爆香。\n\n -- 下入滑炒好的鸡丁，快速翻炒均匀。倒入调好的宫保汁，大火快速翻炒至汁水收浓。最后加入炸好的花生米和葱花，翻炒均匀即可出锅。\n\n -- 装盘后即可享用，口感麻辣鲜香，鸡丁嫩滑，花生米酥脆，是经典的川菜名菜。'
    },
    {
        recipeId: 6,
        categoryId: 2,
        title: '广式叉烧包',
        photo_url:
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        photosArray: [
            'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
            'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
            'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
        ],
        time: 50,
        ingredients: [
            [39, '1 lb'],
            [40, '1 cup'],
            [41, '1/2 cup'],
            [42, '1/4 cup'],
            [43, '2 tablespoons'],
            [44, '1/2 cup'],
            [7, '1/4 teaspoons'],
            [5, '1/4 teaspoons'],
            [30, '1/4 teaspoons'],
            [45, '2 oz'],
            [12, 'for dusting'],
            [4, '1/2 teaspoons'],
            [47, '2'],
            [46, '9 oz']
        ],
        description:
            '-- 制作叉烧馅：将叉烧肉切成小丁，锅中加入适量食用油，小火炒制。加入生抽、老抽、蚝油、白糖和少许料酒，炒出香味后加入水淀粉勾芡，放凉备用。\n\n -- 制作面皮：将中筋面粉、酵母、白糖和温水混合，揉成光滑的面团，盖上湿布发酵1小时至两倍大。将发酵好的面团排气，分成小剂子，擀成中间厚边缘薄的圆形面皮。\n\n -- 包制叉烧包：在面皮中间放入适量的叉烧馅料，将面皮边缘捏出褶皱，收口成包子形状。注意不要包得太紧，要留出空间让包子在蒸制时膨胀。\n\n -- 将包好的叉烧包放在蒸笼布或油纸上，静置醒发15-20分钟。锅中加水烧开，将蒸笼放入，大火蒸制12-15分钟。\n\n -- 蒸好后不要立即开盖，等待2-3分钟让温度慢慢下降，这样包子不会因为温差过大而塌陷。出锅后趁热享用，外皮松软，内馅香甜，是经典的广式点心。'
    },
    {
        recipeId: 0,
        categoryId: 0,
        title: '北京炸酱面',
        photo_url: 'https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
        photosArray: [
            "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
            'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
            'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
            'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
        ],
        time: '15',
        ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
        description:
            '-- 制作炸酱：将五花肉切成小丁，锅中加入适量食用油，小火下入肉丁炒至出油，肉丁微黄。加入切好的葱姜蒜末，炒出香味。\n\n -- 倒入干黄酱和甜面酱（比例约为2:1），小火慢慢翻炒，注意不要炒焦。炒制过程中要不断搅拌，让酱和肉充分融合，炒出酱香味，这个过程需要15-20分钟。\n\n -- 如果酱太稠，可以适量加入清水或高汤调节稀稠度。最后加入少许白糖提鲜，炒至酱汁浓稠，油酱分离即可。\n\n -- 准备菜码：将黄瓜、胡萝卜、豆芽等蔬菜洗净，黄瓜和胡萝卜切丝，豆芽焯水后过凉备用。还可以准备一些其他的菜码如香椿、青豆等。\n\n -- 煮面条：将手擀面或机器面放入沸水中煮熟，捞出后过凉水（喜欢吃热的可以不过凉水）。将面条盛入碗中，放上菜码，浇上炸酱，搅拌均匀即可享用。口感浓郁，酱香四溢，是北京的传统美食。'
    },
    {
        recipeId: 7,
        categoryId: 2,
        title: '白切鸡',
        photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
        photosArray: [
            'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
            'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
            'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
        ],
        time: 15,
        ingredients: [
            [48, '50g'],
            [49, '100g'],
            [50, '350g'],
            [51, '2 plump'],
            [42, '50g'],
            [16, '3'],
            [1, '2 teaspoons'],
            [4, '2 teaspoons']
        ],
        description:
            '-- 选择一只新鲜的三黄鸡或清远鸡，重量约1-1.5公斤。将鸡处理干净，去掉内脏，冲洗干净后备用。在锅中加入足够的水，放入几片姜和葱段，大火烧开。\n\n -- 水开后，提着鸡头将整只鸡放入沸水中，浸泡3秒钟后提起，重复3次（这个过程叫"三提三放"，可以让鸡皮收紧，保持肉质鲜嫩）。然后将整只鸡完全放入锅中，关火，盖上锅盖焖30-40分钟。\n\n -- 判断鸡肉是否熟透：用筷子在鸡腿最厚的地方戳一下，如果没有血水流出即可。将煮好的鸡取出，立即放入冰水中浸泡10分钟，这样可以让鸡皮更加爽脆，肉质更加紧实。\n\n -- 制作蘸料：将姜蒜切成末，放入小碗中。锅中加入少量食用油，烧热后淋在姜蒜末上，激出香味。加入生抽、香油和少许白糖，搅拌均匀即可。\n\n -- 将冷却好的鸡取出，沥干水分后斩成小块，摆盘。配上蘸料即可享用。鸡肉鲜嫩，鸡皮爽脆，蘸料香浓，是经典的粤菜名菜。'
    },
    {
        recipeId: 8,
        categoryId: 2,
        title: '糖醋排骨',
        photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
        photosArray: [
            'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
            'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
            'https://images4.alphacoders.com/817/817350.jpg'
        ],
        time: 60,
        ingredients: [
            [36, '1 large'],
            [25, '1 pound'],
            [51, '5 cloves'],
            [52, '1 pound'],
            [53, '1 pound'],
            [54, '1 28 ounce can'],
            [23, '2 6 ounce can'],
            [55, '2 tablespoons'],
            [56, '1/4 cup'],
            [10, '1/2 cup'],
            [1, '1/2 teaspoons'],
            [58, '1 teaspoon'],
            [4, '1/4 teaspoons'],
            [16, '1 large'],
            [46, '1 pound'],
            [48, '1 cup'],
            [57, '30 ounces']
        ],
        description:
            '-- 将新鲜排骨剁成5-6厘米长的段，用清水冲洗干净。锅中加水，放入排骨，大火烧开后撇去浮沫，继续煮5分钟捞出，用温水冲洗干净，沥干水分备用。\n\n -- 在锅中加入适量食用油，小火加热至五成热，下入排骨，中小火慢慢煎至两面微黄，捞出备用。锅中留底油，下入葱段、姜片和八角炒香。\n\n -- 放入煎好的排骨，加入料酒翻炒几下，然后加入生抽、老抽和适量的热水（水量要没过排骨），大火烧开后转小火慢炖30-40分钟，至排骨熟透软烂。\n\n -- 调制糖醋汁：在碗中放入适量的白糖、陈醋、生抽和少许老抽，搅拌均匀。将炖好的排骨中的汤汁留出一部分，其余大火收汁至浓稠。\n\n -- 倒入调好的糖醋汁，快速翻炒均匀，让每块排骨都裹上糖醋汁。最后撒上白芝麻和葱花即可出锅。口感酸甜适中，排骨软烂入味，色泽红亮，是经典的家常菜。'
    }
];

export const ingredients = [
    {
        ingredientId: 0,
        name: '食用油',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
    },
    {
        ingredientId: 1,
        name: '盐',
        photo_url:
            'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
    },
    {
        ingredientId: 2,
        name: '莲藕',
        photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
    },
    {
        ingredientId: 3,
        name: '辣椒粉',
        photo_url:
            'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
    },
    {
        ingredientId: 4,
        name: '白胡椒粉',
        photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
    },
    {
        ingredientId: 5,
        name: '花椒',
        photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
    },
    {
        ingredientId: 6,
        name: '桂皮',
        photo_url:
            'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
    },
    {
        ingredientId: 7,
        name: '蒜蓉',
        photo_url:
            'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
    },
    {
        ingredientId: 8,
        name: '八角',
        photo_url:
            'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
    },
    {
        ingredientId: 9,
        name: '干辣椒',
        photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
    },
    {
        ingredientId: 10,
        name: '香菜',
        photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
    },
    {
        ingredientId: 11,
        name: '小茴香',
        photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
    },
    {
        ingredientId: 12,
        name: '中筋面粉',
        photo_url:
            'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
    },
    {
        ingredientId: 13,
        name: '红糖',
        photo_url:
            'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
    },
    {
        ingredientId: 14,
        name: '生抽',
        photo_url:
            'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
    },
    {
        ingredientId: 15,
        name: '整鸡',
        photo_url:
            'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
    },
    {
        ingredientId: 16,
        name: '鸡蛋',
        photo_url:
            'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
    },
    {
        ingredientId: 17,
        name: '花生油',
        photo_url:
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
    },
    {
        ingredientId: 18,
        name: '清水',
        photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
    },
    {
        ingredientId: 19,
        name: '五香粉',
        photo_url:
            'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
    },
    {
        ingredientId: 20,
        name: '味精',
        photo_url:
            'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
    },
    {
        ingredientId: 21,
        name: '鸡胸肉',
        photo_url:
            'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
    },
    {
        ingredientId: 22,
        name: '大葱',
        photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
    },
    {
        ingredientId: 23,
        name: '番茄酱',
        photo_url:
            'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
    },
    {
        ingredientId: 24,
        name: '郫县豆瓣酱',
        photo_url:
            'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
    },
    {
        ingredientId: 25,
        name: '牛肉末',
        photo_url:
            'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
    },
    {
        ingredientId: 26,
        name: '红豆',
        photo_url:
            'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
    },
    {
        ingredientId: 27,
        name: '手擀面',
        photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
    },
    {
        ingredientId: 28,
        name: '花生米',
        photo_url:
            'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
    },
    {
        ingredientId: 29,
        name: '芝麻',
        photo_url:
            'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
    },
    {
        ingredientId: 30,
        name: '柠檬',
        photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
    },

    {
        ingredientId: 31,
        name: '孜然粉',
        photo_url:
            'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
    },
    {
        ingredientId: 32,
        name: '朝天椒',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
    },
    {
        ingredientId: 33,
        name: '草鱼',
        photo_url:
            'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
    },
    {
        ingredientId: 34,
        name: '豆腐',
        photo_url:
            'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
    },
    {
        ingredientId: 35,
        name: '辣椒段',
        photo_url:
            'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
    },
    {
        ingredientId: 36,
        name: '洋葱',
        photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
    },
    {
        ingredientId: 37,
        name: '青椒',
        photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
    },
    {
        ingredientId: 38,
        name: '红椒',
        photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
    },
    {
        ingredientId: 39,
        name: '面团',
        photo_url:
            'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
    },
    {
        ingredientId: 40,
        name: '老抽',
        photo_url:
            'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
    },
    {
        ingredientId: 41,
        name: '蚝油',
        photo_url:
            'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
    },
    {
        ingredientId: 42,
        name: '猪油',
        photo_url: 'https://redrockstoffee.com/media/2016/11/AdobeStock_76417550.jpeg'
    },
    {
        ingredientId: 43,
        name: '料酒',
        photo_url:
            'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
    },
    {
        ingredientId: 44,
        name: '甜面酱',
        photo_url:
            'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
    },
    {
        ingredientId: 45,
        name: '干黄酱',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
    },
    {
        ingredientId: 46,
        name: '叉烧肉',
        photo_url:
            'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
    },
    {
        ingredientId: 47,
        name: '芹菜',
        photo_url:
            'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
    },
    {
        ingredientId: 48,
        name: '生姜',
        photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
    },
    {
        ingredientId: 49,
        name: '五花肉',
        photo_url:
            'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
    },
    {
        ingredientId: 50,
        name: '面条',
        photo_url:
            'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
    },
    {
        ingredientId: 51,
        name: '大蒜',
        photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
    },
    {
        ingredientId: 52,
        name: '排骨',
        photo_url:
            'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
    },
    {
        ingredientId: 53,
        name: '陈醋',
        photo_url:
            'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
    },
    {
        ingredientId: 54,
        name: '白糖',
        photo_url:
            'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
    },
    {
        ingredientId: 55,
        name: '冰糖',
        photo_url:
            'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
    },
    {
        ingredientId: 56,
        name: '葱花',
        photo_url:
            'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
    },
    {
        ingredientId: 57,
        name: '银耳',
        photo_url:
            'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
    },
    {
        ingredientId: 58,
        name: '莲子',
        photo_url:
            'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
    },
    {
        ingredientId: 59,
        name: '绿豆',
        photo_url:
            'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
    },
    {
        ingredientId: 60,
        name: '糯米粉',
        photo_url:
            'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
    },
    {
        ingredientId: 61,
        name: '水淀粉',
        photo_url:
            'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
    },
];
