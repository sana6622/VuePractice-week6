import{e as c,c as u,a as i,b as o,w as a,d as e,r,o as _}from"./index-CKMdxcEc.js";import{_ as m}from"./_plugin-vue_export-helper-DlAUqK2U.js";var d={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"sana-teashop",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};console.log(d);const{VITE_URL:h}=d,p={mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexschoolToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=t,this.checkAdmin()},methods:{checkAdmin(){const t=`${h}/api/user/check`;c.post(t).then(s=>{console.log("驗證成功",s.data.success)}).catch(s=>{console.log("error",s),alert("尚未登入"),this.$router.push("/login")})}}},f=i("h2",null,"這是後台",-1);function k(t,s,v,$,x,E){const n=r("RouterLink"),l=r("router-view");return _(),u("div",null,[f,i("nav",null,[o(n,{to:"/admin/adminHome"},{default:a(()=>[e("後台首頁")]),_:1}),e(" | "),o(n,{to:"/admin/adminProducts"},{default:a(()=>[e("後台產品列表")]),_:1}),e(" | "),o(n,{to:"/admin/adminOrder"},{default:a(()=>[e("後台訂單列表")]),_:1}),e(" | "),o(n,{to:"/"},{default:a(()=>[e("回到前台")]),_:1})]),o(l)])}const R=m(p,[["render",k]]);export{R as default};
