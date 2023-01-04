// const { default: Vue } = require("vue")

const NewsApp = {
    data() {
        return {
            items: [
                {news_img: "img/YCM7Coveer-LeadingTheWay.png",
                 news_source: "Young Change Makers Book Series",
                 news_date: "June 22, 2022",
                 news_head: "Leading The Way",
                 news_content: "Anna is in the book series Young Change Makes - Leading The Way",
                 news_more: "img/YCM-Book7pressrelease.png"
                },
                {news_img: "https://img.youtube.com/vi/_DRW_qqB3lY/0.jpg",
                 news_source: "Design Boom",
                 news_date: "June 13th, 2022",
                 news_head: "THE INSPIRING STORY OF ANNA DU",
                 news_content: "If you’re in need of some wholesome content then this story of high-schooler Anna Du might just do the trick...",
                 news_more: "https://www.designboom.com/technology/anna-du-teen-inventor-robot-microplastic-pollution-06-13-2022/"
                },
                {news_img: "https://img.youtube.com/vi/ZWN2U0xWsSQ/0.jpg",
                 news_source: "Upworthy",
                 news_date: "April 5th, 2022",
                 news_head: "Upworthy Voices: Anna Du is Saving Our Oceans!",
                 news_content: "Anna Du is only 16 - but she's changing the world already. This motivated and environmentally conscious high school student...",
                 news_more: "https://youtu.be/ZWN2U0xWsSQ"
                },
                {news_img: "img/jshs_ne_2022.jpg",
                 news_source: "Junior Science And Humanities Symposium",
                 news_date: "March 24th, 2022",
                 news_head: "JSHS New England First Place",
                 news_content: "Anna won First Place at Junior Science And Humanities Symposium New England region, and now is a two-time National Finalist.",
                 news_more: "jshs2022.html"
                },
                {news_img: "img/NationalGeographyAward2022.png",
                 news_source: "National Geography",
                 news_date: "March 6th, 2022",
                 news_head: "Cultivating Empathy for the Earth Award",
                 news_content: "Anna won That's Geography! Cultivating Empathy for the Earth Award by Society of Science and Public and National Geographic",
                 news_more: "pdf/NationalGeographyAward.pdf"
                },
                {news_img: "img/S__31342670.jpg",
                 news_source: "National Science Museum (NSM)THAILAND",
                 news_date: "November 9-19, 2021",
                 news_head: "2021 International Photo Exhibition River and Ocean, Connecting Water to Life",
                 news_content: "Anna's photograph was selected to be part of the 2021 International Photo Exhibition River and Ocean, Connecting Water to Life at the National Science and Technology Fair 2021 which will be held during 9 – 19 November 2021, the biggest fair of the year in science and technology in Thailand.",
                 news_more: "https://www.nsm.or.th/english/index.php"
                },
                {news_img: "https://images.squarespace-cdn.com/content/v1/5e7a581f8fd13046931cf26d/1619209222834-M5CBOM9OHJIQI5P73ZUM/PODCAST_GG_ARTWORK.png?format=750w",
                 news_source: "Seeker",
                 news_date: "June 24th, 2021",
                 news_head: "The Genius Generation",
                 news_content: "Listen to Anna on The Genius Generation PodCast",
                 news_more: "https://beta.prx.org/stories/358059"
                },
                {news_img: "img/MissionMagazineCover.gif",
                 news_source: "Mission Magazine",
                 news_date: "May 27th, 2021",
                 news_head: "Youth Series",
                 news_content: "Anna was listed in Mission Magazine's youth series",
                 news_more: "img/MissionMagazine-YouthSeries-AnnaDu.jpg"
                },
                {news_img: "img/isef2021.jpg",
                 news_source: "ISEF",
                 news_date: "May 20th, 2021",
                 news_head: "Regeneron ISEF",
                 news_content: "Anna won the 3rd place in Regeneron ISEF 2021",
                 news_more: "https://www.societyforscience.org/press-release/2021-regeneron-isef-grand-awards/"
                },
                {news_img: "img/MSEF2021.png",
                 news_source: "MSEF",
                 news_date: "May 4th, 2021",
                 news_head: "Massachusett Science Engineering Fair",
                 news_content: "Anna won the grand prize of Mass Science Fair – Sanofi Genzyme Award. As a freshman, Anna is the youngest person to receive this distinction",
                 news_more: "https://secureservercdn.net/50.62.90.29/e99.5ea.myftpupload.com/wp-content/uploads/2021/05/2021-Awards-.pdf"
                },
                {news_img: "img/jshs_ne_2022.jpg",
                 news_source: "junior science and humanities symposium",
                 news_date: "April 20th, 2021",
                 news_head: "JSHS National Finalist",
                 news_content: "Anna won Second Place and National Finalist for oral presentation",
                 news_more: "http://jshs.org/wp-content/uploads/2021/06/2021-NJSHS-Abstract-Catalog.pdf"
                },
                {news_img: "img/RegionIVFair2021.png",
                 news_source: "Region IV Science Fair",
                 news_date: "Mar 6th, 2021",
                 news_head: "Region IV Science Fair",
                 news_content: "Anna won First Place in Massachusetts Region IV Science Fair, and qualified for ISEF 2021",
                 news_more: "https://sites.google.com/site/regionivscifair/winners/2021-winners"
                },
                {news_img: "https://img.youtube.com/vi/hndmEWUNlzg/0.jpg",
                 news_source: "BYUTV",
                 news_date: "Summer, 2021",
                 news_head: "Operation Awesome",
                 news_content: "",
                 news_more: "https://www.prnewswire.com/news-releases/byutv-winter-premieres-include-operation-awesome-debut-301197957.html"
                },
                {news_img: "img/20_under_20_cover.png",
                 news_source: "Diversity In Action",
                 news_date: "Summer, 2020",
                 news_head: "20 Under 20 Young Innovators",
                 news_content: "",
                 news_more: "https://mydigitalpublication.com/publication/?m=46265&i=663138&p=38"
                },
                {news_img: "img/Stem-Panel-FB.jpg",
                 news_source: "Barron Prize",
                 news_date: "July 28, 2020",
                 news_head: "Young Heroes Summit 2020",
                 news_content: "On July 28 at 1pm ET, the Gloria Barron Prize for Young Heroes presents a virtual Young Heroes Summit that brings together past winners ...",
                 news_more: "https://barronprize.org/yhs/"
                },
                {news_img: "http://i.vimeocdn.com/video/874517927-4ff8dbb9acf178d7bbff60e0eaa6c1752efc7c0ea80fcc8d29d4ecbc2d3cd82f-d_640",
                 news_source: "Water World",
                 news_date: "April 6, 2020",
                 news_head: "The Drop: Young Hero Spreads Awareness of Microplastics Pollution",
                 news_content: "An extraordinary eighth grader has made it her mission ...",
                 news_more: "https://www.waterworld.com/home/video/14173450/the-drop-young-hero-spreads-awareness-of-microplastic-pollution"
                },
                {news_img: "./img/WeDay.png",
                 news_source: "We Day",
                 news_date: "Feburary, 2020",
                 news_head: "Anna has been selected to be featured in the WE DAY BROADCAST of 2020!",
                 news_content: "",
                 news_more: ""
                },
                {news_img: "./img/MnMCover.jpg",
                 news_source: "",
                 news_date: "Feb 1, 2020",
                 news_head: "",
                 news_content: "",
                 news_more: "https://www.amazon.com/Microplastics-Me-Anna-Du/dp/1943431507"
                },
                {news_img: "img/AnnaAtBroadcomMaster2019.jpg",
                 news_source: "Broadcom Masters",
                 news_date: "September 18, 2019",
                 news_head: "Top 30 Finalist of 2019 Broadcom Master! Again!",
                 news_content: "Investigating a Machine Learning Based ROV to Identify Aggregation of Marine Microplastics...",
                 news_more: "https://student.societyforscience.org/broadcom-masters-2019-finalists#Du"
                },
                {news_img: "https://barronprize.org/wp-content/uploads/Anna-Headshot.jpg",
                 news_source: "Gloria Barron Prize",
                 news_date: "September 16, 2019",
                 news_head: "Gloria Barron Prize for Young Heros",
                 news_content: "...Anna invented a Remotely Operated Vehicle (ROV) that detects microplastics on the ocean floor. She has also created the Deep Plastics Initiative...",
                 news_more: "https://barronprize.org/meet-the-winners/2019-winners/"
                },
                {news_img: "https://img.youtube.com/vi/npKZCrtol0Y/0.jpg",
                 news_source: "Worldskills Conference",
                 news_date: "August 23, 2019",
                 news_head: "Keynote Speaker at 2019 Worldskills Conference",
                 news_content: "Our planet in 2050: young people's aspirations for an aware and responsible society",
                 news_more: "https://worldskillsconference.com/2019/sessions/id/94/"
                },
                {news_img: "https://img.youtube.com/vi/X8RRXikiEgg/0.jpg",
                 news_source: "Technet Czech",
                 news_date: "May 22, 2019",
                 news_head: "Navrhla robota a trénuje senzory. Třináctiletá programátorka se AI nebojí",
                 news_content: "...To jsou projekty, na kterých ve volném čase pracuje Anna Du...",
                 news_more: "https://www.idnes.cz/technet/technika/anna-du-robot-programovani-python-umela-inteligence.A190521_135705_tec_technika_pka"
                },
                {news_img: "img/Czech_Innovation_Week_Keynote_Speaker.jpeg",
                 news_source: "Czech Innovation Week",
                 news_date: "May 22, 2019",
                 news_head: "keynote speaker at Czech Innovation Week 2019",
                 news_content: "Anna Du is the keynote speaker at Czech Innovation Week 2019",
                 news_more: "https://www.czechleaders.com/photogalleries/innovation-week-2019"
                },
                {news_img: "./img/AnnaDu2019MSEFGrandPrize.jpg",
                 news_source: "",
                 news_date: "May 11, 2019",
                 news_head: "Grand Prize of 2019 Massachusetts Science Fair",
                 news_content: "",
                 news_more: "https://scifair.com/wp-content/uploads/2019/05/MS-WINNERS-2019.pdf"
                },
                {news_img: "img/LeadLikeGirl_Keynote_Speaker.jpeg",
                 news_source: "LeadLikeGirl",
                 news_date: "April, 2019",
                 news_head: "Keynote Speaker at LeadLikeGirl Conference",
                 news_content: "Anna was selected as Keynote speaker at LeadLikeGirl Conference ...",
                 news_more: "https://www.stuartschool.org/academics/leadlikeagirl-conference/2019-speakers"
                },
                {news_img: "https://mahb.stanford.edu/wp-content/uploads/2018/08/QAphoto.jpg",
                 news_source: "Stanford MAHB",
                 news_date: "Dec 27, 2018",
                 news_head: "Saving Our Oceans is My Planetary Duty: A MAHB Dialogue with 12-year-old Emerging Scientist",
                 news_content: "Anna Du has been named one of the top ten students in the US, by 3M’s America’s Young Scientist Challenge, as well as being selected students... 	",
                 news_more: "https://mahb.stanford.edu/news/saving-oceans-planetary-duty-mahb-dialogue-12-year-old-emerging-scientist-anna-du/"
                },
                {news_img: "./img/news2.jpg",
                 news_source: "Huffington Post",
                 news_date: "Dec 3, 2018",
                 news_head: "A Huge Mystery About Ocean Plastics Remains Unsolved",
                 news_content: "...A 7th grader has taken a stab at creating such technology. Anna Du ...",
                 news_more: "https://www.huffingtonpost.com/entry/ocean-plastic-mystery_us_5be6e909e4b0769d24cdc309"
                },
                {news_img: "./img/news1.jpg",
                 news_source: "Smithsonion",
                 news_date: "Oct 23, 2018",
                 news_head: "",
                 news_content: "Anna Du was walking along Castle Island’s beach in South Boston when she noticed plastic scattered on the ...",
                 news_more: "https://www.smithsonianmag.com/innovation/12-year-old-girl-built-robot-can-find-microplastics-ocean-180970607/"
                },
                {news_img: "./img/news3.jpg",
                 news_source: "Cheddar TV",
                 news_date: "Oct 16, 2018",
                 news_head: "A 7th Grade Scientist Is on Mission to Clean Our Oceans",
                 news_content: "Anna Du built a robot to help remove the 150 million metric tons of plastic waste from our oceans. She joins CBN to discuss her ambitions.",
                 news_more: "https://www.newstimes.com/news/media/A-7th-Grade-Scientist-Is-on-Mission-to-Clean-Our-1371872.php"
                },
                {news_img: "img/treehugger.webp",
                 news_source: "TreeHugger",
                 news_date: "Oct 11, 2018",
                 news_head: "Genius 6th Grader Invents Device That Hunts for Ocean Microplastics",
                 news_content: "As one of 10 finalists of the 3M Young Scientist Challenge, 12-year-old Anna Du will now get the chance to bring her invention to the seas.",
                 news_more: "https://www.treehugger.com/genius-th-grader-invents-device-hunts-harmful-microplastics-ocean-4854400"
                },
                {news_img: "img/anna-du-with-her-rov-invention.jpeg",
                 news_source: "Inverse",
                 news_date: "July 28, 2018",
                 news_head: "SAVE OCEANS FROM MICROPLASTICS",
                 news_content: "'She has all of the qualities — all of those essential ingredients — to be a great scientist.'... ",
                 news_more: "https://www.inverse.com/article/47488-young-innovator-anna-du-rov-microplastic"
                },
                {news_img: "./img/news_accuweather.jpg",
                 news_source: "AccuWeather",
                 news_date: "Jul 17, 2018",
                 news_head: "12-year-old engineer invents device to combat ocean microplastic pollution ",
                 news_content: "Saving the planet’s oceans from plastic pollution isn’t on the agenda of a typical 12-year-old. However... ",
                 news_more: "https://www.accuweather.com/en/weather-news/12-year-old-engineer-invents-device-to-combat-ocean-microplastic-pollution/347029"
                },
                {news_img: "img/anna-rov.webp",
                 news_source: "EcoWatch",
                 news_date: "Jun 28, 2018",
                 news_head: "12-Year-Old Girl Invents Plastic-Detecting Robot to Save Our Oceans",
                 news_content: "For 12-year-old Anna Du a love of the ocean and marine animals inspired her to build a device that hunts for microplastics... ",
                 news_more: "https://www.ecowatch.com/plastic-pollution-solutions-inventions-2582120616.html"
                },
            ]
        }
    }
}
Vue.createApp(NewsApp).mount('#news');

const VideosApp = {
    data() {
        return {
            videos: [
                { video_title: "Upworthy Voices",
                  video_url: "https://youtu.be/ZWN2U0xWsSQ",
                  video_img: "https://img.youtube.com/vi/ZWN2U0xWsSQ/0.jpg"
                },
                { video_title: "Upcycle a Trash CD player",
                  video_url: "https://youtu.be/oWSweQbaqPQ",
                  video_img: "https://img.youtube.com/vi/oWSweQbaqPQ/0.jpg"
                },
                { video_title: "All About Pyrolysis",
                  video_url: "https://youtu.be/BUbi6DaYv9w",
                  video_img: "https://img.youtube.com/vi/BUbi6DaYv9w/0.jpg"
                },
                { video_title: "World Oceans Week",
                  video_url: "https://youtu.be/I__73QM7Cg8",
                  video_img: "img/WorldOceansDay.jpg"
                },
                { video_title: "Operation Awesome Season 1",
                  video_url: "https://youtu.be/hndmEWUNlzg-s",
                  video_img: "https://img.youtube.com/vi/hndmEWUNlzg/0.jpg"
                },
                { video_title: "Operation Awesome Season 1",
                  video_url: "https://youtu.be/SYgT1x6_occ-s",
                  video_img: "https://img.youtube.com/vi/SYgT1x6_occ/0.jpg"
                },
                { video_title: "Operation Awesome Season 1",
                  video_url: "https://youtu.be/BHz7b6DxKtc-s",
                  video_img: "https://img.youtube.com/vi/BHz7b6DxKtc/0.jpg"
                },
                { video_title: "What are Ocean Microplastics?",
                  video_url: "https://youtu.be/YuTuHKGV4-s",
                  video_img: "https://img.youtube.com/vi/YuTuHKGV4-s/0.jpg"
                },
                { video_title: "Chicken Surprise!",
                  video_url: "https://youtu.be/6IjhL0WSNpI",
                  video_img: "https://img.youtube.com/vi/6IjhL0WSNpI/0.jpg"
                },
                { video_title: "Makin' Chicks With Anna!",
                  video_url: "https://youtu.be/QWu8Oza5E_g",
                  video_img: "https://img.youtube.com/vi/QWu8Oza5E_g/0.jpg"
                },
                { video_title: "Anna updates her book",
                  video_url: "https://images-na.ssl-images-amazon.com/images/I/E1yK2kBru1S.mp4",
                  video_img: "img/Anna_update.jpg"
                },
                { video_title: "Watch Anna talk about her ROV",
                  video_url: "https://www.amazon.com/vdp/164eeefed67542c4a974983f08215bb4?product=1943431507&ref=cm_sw_em_r_ib_dt_nZiKzkpFUhOV3",
                  video_img: "https://m.media-amazon.com/images/I/5136w9PX7kL.jpg"
                },
                { video_title: "The big problems with microplastics",
                  video_url: "https://www.amazon.com/vdp/29fd430f3eb84bb595977b180301382d?product=1943431507&ref=cm_sw_em_r_ib_dt_nZiKzkpFUhOV3",
                  video_img: "https://m.media-amazon.com/images/I/619tJPs4SUL.jpg"
                },
                { video_title: "working with publisher, Tumblehome, Inc",
                  video_url: "https://www.amazon.com/vdp/39867330b35642f2b1c4b82bfdfe74d8?product=1943431507&ref=cm_sw_em_r_ib_dt_nZiKzkpFUhOV3",
                  video_img: "https://m.media-amazon.com/images/I/61oOr9sb+gL.jpg"
                },
                { video_title: "Anna Du talks about science fairs",
                  video_url: "https://www.amazon.com/vdp/1910d4bee1094a5a83764966c84483eb?product=1943431507&ref=cm_sw_em_r_ib_dt_nZiKzkpFUhOV3",
                  video_img: "https://m.media-amazon.com/images/I/617d2806mKL.jpg"
                },
                { video_title: "Unipetrol (Czech) interview",
                  video_url: "https://youtu.be/X8RRXikiEgg",
                  video_img: "https://img.youtube.com/vi/X8RRXikiEgg/0.jpg"
                },
                { video_title: "Worldskill Conferences panelist",
                  video_url: "https://youtu.be/npKZCrtol0Y",
                  video_img: "https://img.youtube.com/vi/npKZCrtol0Y/0.jpg"
                },
                { video_title: "Kelly Clarkson Show",
                  video_url: "https://youtu.be/44PGjrwWosQ",
                  video_img: "https://img.youtube.com/vi/44PGjrwWosQ/0.jpg"
                },
                { video_title: "60 Seconds Documentary",
                  video_url: "https://youtu.be/BWGBc53v98E",
                  video_img: "https://img.youtube.com/vi/BWGBc53v98E/0.jpg"
                },
                { video_title: "Designer Squad",
                  video_url: "https://youtu.be/0t759r1V90Y",
                  video_img: "https://img.youtube.com/vi/0t759r1V90Y/0.jpg"
                },
                { video_title: "KickStarter",
                  video_url: "http://annadu.org/nas/kickstarter.mp4",
                  video_img: "img/kickstarter_0.jpg"
                },
                { video_title: "Gloria Barron Prize for Young Heroes",
                  video_url: "https://youtu.be/9C-fuPHvR_w",
                  video_img: "https://img.youtube.com/vi/9C-fuPHvR_w/0.jpg"
                },
                { video_title: "3M Young Scientist Challenge Final",
                  video_url: "https://youtu.be/jgDqgPRCVjc",
                  video_img: "https://img.youtube.com/vi/jgDqgPRCVjc/0.jpg"
                },
            ]
        }
    }
}
Vue.createApp(VideosApp).mount('#videos');

const CompetitionsApp = {
    data() {
        return {
            competitions: [
                { compet_name: "Broadcom Masters 2019",
                  compet_title: "Broadcom Masters 2019 Finalist",
                  compet_url: "https://www.societyforscience.org/broadcom-masters/",
                  compet_img: "img/BCM_homepage_banner_text.jpg"
                },
                { compet_name: "Broadcom Masters 2018",
                  compet_title: "Broadcom Masters 2018 Finalist",
                  compet_url: "https://student.societyforscience.org/broadcom-masters-2018-finalists#Du",
                  compet_img: "img/activity1.jpg"
                },
                { compet_name: "3M Discovery Young Scientist Challenge 2018",
                  compet_title: "Top 10 in YSC",
                  compet_url: "https://www.youngscientistlab.com/competition/video_challenge/archives/2018",
                  compet_img: "img/activity2.jpg"
                },
            ]
        }
    }
}
Vue.createApp(CompetitionsApp).mount('#competitions');

