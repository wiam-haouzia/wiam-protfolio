var multilang = {

    langs: [ 'fr' , 'en' ],
    currentLocal: 'en',
    data : {
        "fr" : {
            'experience_education' : "Experience & Education",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "caption_title": "UI/UX Designer",
            "caption_subtitle": "& front-end developer",
            "caption_body": "Hi There, <br> I'm <strong class=\"bold-text\">WIAM HAOUZIA</strong> a Moroccan UI/UX designer and Front-End Developer, Check my projects and I will be glad to make your ideas look beautiful",
            "caption_btn": "My Projects",
            't_professional_experience': "Professional Experience",
            "t_education": 'Education',
        },
        "en" : {
            "" : "",
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
}