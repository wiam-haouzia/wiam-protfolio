var multilang = {
    langs: [ 'fr' , 'en' ],
    currentLocal: 'en',
    btn_selector: ".local_selector",
    data : {
        "fr" : {
            "experience_education" : "Experience & Education",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "caption_title": "UI/UX Designer",
            "caption_subtitle": "& front-end developer",
            "caption_body": "Hi There, <br> I'm <strong class=\"bold-text\">WIAM HAOUZIA</strong> a Moroccan UI/UX designer and Front-End Developer, Check my projects and I will be glad to make your ideas look beautiful",
            "caption_btn": "My Projects",
            't_professional_experience': "Professional Experience",
            "pro_exp_1_title": "UI/UX Designer <i class=\"fas fa-map-marker-alt\"></i> Softseventart",
            "pro_exp_1_date": "September 2019 - Now",
            "pro_exp_2_title": "Web development Instructor <i class=\"fas fa-map-marker-alt\"></i> CEIT",
            "pro_exp_2_date": "April - July 2019",
            "pro_exp_3_title": "Anglophone Assistant <i class=\"fas fa-map-marker-alt\"></i> EDMARK MOROCCO",
            "pro_exp_3_date": "September - October 2018",
            "pro_exp_4_title": "Intern Web developer & Designer <i class=\"fas fa-map-marker-alt\"></i> ICOZ",
            "pro_exp_4_date": "February - August 2018",
            "t_education": 'Education',
            "ed_1_date": "Web technologies Competitor <i class=\"fas fa-map-marker-alt\"></i> WORLDKILLS 2019",
            "ed_1_date": "November 2018 - March 2019",
            "ed_2_date": "Associate's degree in Multimedia Development <i class=\"fas fa-map-marker-alt\"></i> ISAG",
            "ed_2_date": "July 2018",
            "ed_3_date": "High School degree <i class=\"fas fa-map-marker-alt\"></i> Agronomic School F.B.S",
            "ed_3_date": "July 2016",
            "t_online_certifications" : "Online Certifications",
            "t_skills": "Skills",
            "t_projects": "Projects",
            "filter_all": "All",
            "filter_uiux_design": "UI/UX Design",
            "filter_graphic_design": "Graphic Design",
            "filter_web_development": "Web Development",
            "t_contact": "<span>Now, You know me enough to</span> <br>Contact me",
            "contact_nom": "Nom *",
            "contact_email": "Email *",
            "contact_sujet": "Sujet *",
            "contact_message": "Message *",
        },
        "en" : {
            "experience_education" : "Experience & Education",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "caption_title": "UI/UX Designer",
            "caption_subtitle": "& front-end developer",
            "caption_body": "Hi There, <br> I'm <strong class=\"bold-text\">WIAM HAOUZIA</strong> a Moroccan UI/UX designer and Front-End Developer, Check my projects and I will be glad to make your ideas look beautiful",
            "caption_btn": "My Projects",
            't_professional_experience': "Professional Experience",
            "pro_exp_1_title": "UI/UX Designer <i class=\"fas fa-map-marker-alt\"></i> Softseventart",
            "pro_exp_1_date": "September 2019 - Now",
            "pro_exp_2_title": "Web development Instructor <i class=\"fas fa-map-marker-alt\"></i> CEIT",
            "pro_exp_2_date": "April - July 2019",
            "pro_exp_3_title": "Anglophone Assistant <i class=\"fas fa-map-marker-alt\"></i> EDMARK MOROCCO",
            "pro_exp_3_date": "September - October 2018",
            "pro_exp_4_title": "Intern Web developer & Designer <i class=\"fas fa-map-marker-alt\"></i> ICOZ",
            "pro_exp_4_date": "February - August 2018",
            "t_education": 'Education',
            "ed_1_date": "Web technologies Competitor <i class=\"fas fa-map-marker-alt\"></i> WORLDKILLS 2019",
            "ed_1_date": "November 2018 - March 2019",
            "ed_2_date": "Associate's degree in Multimedia Development <i class=\"fas fa-map-marker-alt\"></i> ISAG",
            "ed_2_date": "July 2018",
            "ed_3_date": "High School degree <i class=\"fas fa-map-marker-alt\"></i> Agronomic School F.B.S",
            "ed_3_date": "July 2016",
            "t_online_certifications" : "Online Certifications",
            "t_skills": "Skills",
            "t_projects": "Projects",
            "filter_all": "All",
            "filter_uiux_design": "UI/UX Design",
            "filter_graphic_design": "Graphic Design",
            "filter_web_development": "Web Development",
            "t_contact": "<span>Now, You know me enough to</span> <br>Contact me",
            "contact_nom": "Nom *",
            "contact_email": "Email *",
            "contact_sujet": "Sujet *",
            "contact_message": "Message *",
        },
    },
    getLang: function(){
        return localStorage.getItem('lang');
    },
    setLang: function($local){
        if (!this.data[$local]) return false;
        localStorage.setItem('lang',$local);
        this.currentLocal = $local;
    },
    getValue:function($key){
        return this.data[ this.currentLocal ][$key];
    },
    events: function () { 
        $(document).on('click', this.btn_selector , function (e) {
            var selected_local = $(this).data('local');
            if (this.langs[selected_local]) return false;
            $('[data-lkey]').each(function (i, elem) {
                var lkey = $(elem).data('lkey');
                console.log( lkey , this.getValue(lkey) );
            });
        });
    },
    oninit: function () { 
        var storage_local = localStorage.getItem('lang');
        this.setLang(storage_local);

        this.events();
    }
}
multilang.oninit();