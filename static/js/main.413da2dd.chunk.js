(this.webpackJsonpfaekbook=this.webpackJsonpfaekbook||[]).push([[0],{75:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var r,i,o=t(13),a=t(8),c=t.n(a),s=t(52),d=t.n(s),l=t(12),m=t(14),h={navbar_elements_height:"3rem",navbar_column_gap:"1rem",navbar_height:"4.5rem",dropdown_menu_bdr_rds:"10px",ButtonCSS:Object(m.b)(r||(r=Object(o.a)(["\n    font-size: inherit;\n    border-radius: 0.5rem;\n    font-size: inherit;\n    padding: 1.25rem 1.75rem;\n    font-weight: 700;\n    border: none;\n    color: white;\n    background-color: #42b72a;\n    width: 100%;\n    &:hover {\n      cursor: pointer;\n    }\n  "]))),InputCSS:Object(m.b)(i||(i=Object(o.a)(["\n    outline: none;\n    border: 1px solid #dddfe2;\n    border-radius: 0.5rem;\n    width: 100%;\n    font-size: inherit;\n    padding: 1.25rem 1.75rem;\n    &::placeholder {\n      color: #90949c;\n      font-weight: 100;\n    }\n  "])))},u=t(37),b=t(58),g=Object(a.createContext)({}),f={light:{type:"light",bxShdw:"rgba(50, 50, 93, 0.25) 0 0 5px -1px, rgba(0, 0, 0, 0.3) 0 0 3px -1px",main_bgclr:"#fff",nav_btm_brdr_clr:"#fff",font:"#050505",font_lighter:"#65676b",divider_clr:"#ced0d4",hover:"#d4d4d434",icon_color:"#1d1f23",theme_toggler_bgclr:"#e6e8ed",theme_toggler_bgclr_active:"#E7F3FF",theme_toggler_icon_active:"#0571ED",body:"#f0f2f5",avatar_pic_cam_icon_bgclr:"#e4e6eb",whats_on_ur_mind_bgclr:"#F0F2F5"},dark:{type:"dark",bxShdw:"rgba(255, 255, 255) 0 0 5px -1px, rgba(255, 255, 255) 0 0 3px -1px",main_bgclr:"#242526",nav_btm_brdr_clr:"#393a3b",font:"#e4e6eb",font_lighter:"#b0b3b8",divider_clr:"#3e4042",hover:"#ffffff45",icon_color:"#e4e6ea",theme_toggler_bgclr:"#4e5052",theme_toggler_bgclr_active:"#263951",theme_toggler_icon_active:"#2D86FF",body:"#18191a",avatar_pic_cam_icon_bgclr:"#3a3b3c",whats_on_ur_mind_bgclr:"#3A3B3C"}},p=t(27),j=t(3),x=t(4),O=t(56),v=t(42),_=t(29);Object(O.a)({apiKey:"AIzaSyD5ADlnZW_bL1r3q3w2ckoqqhl4cjLU7B8",authDomain:"faekbook-35cc8.firebaseapp.com",databaseURL:"https://faekbook-35cc8-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"faekbook-35cc8",storageBucket:"faekbook-35cc8.appspot.com",messagingSenderId:"692722345820",appId:"1:692722345820:web:964baa89b10843e20c8399",measurementId:"G-E0CJXD28RC"});var k,w,y,N=Object(_.b)(),S=Object(v.b)(),D=function(){function n(){Object(j.a)(this,n)}return Object(x.a)(n,null,[{key:"signUp",value:function(n,e){Object(_.a)(N,n,e).then((function(t){var r={auth:{email:n,password:e}};Object(v.c)(Object(v.a)(S,"users",n),r)})).catch((function(n){var e=n.code,t=n.message;alert("Error: ".concat(e,". ").concat(t))}))}},{key:"signIn",value:function(n,e){Object(_.d)(N,n,e).then((function(e){console.log("User with email ".concat(n," has logged in successfully"))})).catch((function(n){var e=n.code,t=n.message;alert("Error: ".concat(e,". ").concat(t))}))}},{key:"getUserData",value:function(n){Object(_.c)(N,(function(n){}))}},{key:"signOut",value:function(){Object(_.e)(N).then((function(){console.log("signed out successfully")})).catch((function(n){console.log(n,"sign-out failed")}))}},{key:"handleAuthStateChange",value:function(n,e){Object(_.c)(N,(function(t){t?n():e()}))}}]),n}(),I=t.p+"static/media/picture_of_myself.ded9b47d.jpg",z=t(6),T=Object(m.d)(k||(k=Object(o.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"]))),C=Object(m.c)("nav")(w||(w=Object(o.a)(["\n  position: sticky;\n  top: 0;\n  background: ",";\n  height: ",";\n  box-shadow: ",";\n  border-bottom: 1px solid ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-inline: 1rem;\n  z-index: 100;\n  .left {\n    display: flex;\n    align-items: center;\n    column-gap: ",";\n    font-size: 2rem;\n    font-weight: 700;\n    a {\n      text-decoration: none;\n      .fb-icon,\n      .faekbook {\n        color: ",";\n        &:hover {\n          cursor: pointer;\n        }\n      }\n      .fb-icon {\n        height: ",";\n        width: ",";\n        animation: "," 2s infinite linear;\n      }\n    }\n  }\n  .right {\n    display: flex;\n    column-gap: ",";\n    .toggle-dropdown-menu {\n      height: ",";\n      width: ",";\n      border-radius: 50%;\n      background: ",";\n      font-size: ",";\n      color: ",";\n      &:hover {\n        cursor: pointer;\n        filter: brightness(",");\n      }\n    }\n    a .user-profile-button,\n    .log-in-button {\n      height: ",";\n      border-radius: 50px;\n      display: flex;\n      align-items: center;\n      font-weight: 700;\n      font-size: 1.25rem;\n      color: ",";\n      &:hover {\n        cursor: pointer;\n        background: ",";\n      }\n    }\n    a {\n      text-decoration: none;\n      .user-profile-button {\n        column-gap: 0.6rem;\n        padding-left: 0.35rem;\n        padding-right: 0.6rem;\n        img {\n          height: calc("," - 0.7rem);\n          border-radius: 50%;\n        }\n      }\n    }\n    .log-in-button {\n      padding-inline: 1rem;\n    }\n  }\n"])),(function(n){return n.theme.main_bgclr}),h.navbar_height,(function(n){return n.theme.bxShadw}),(function(n){return n.theme.nav_btm_brdr_clr}),h.navbar_column_gap,(function(n){return n.theme.font}),h.navbar_elements_height,h.navbar_elements_height,T,h.navbar_column_gap,h.navbar_elements_height,h.navbar_elements_height,(function(n){return n.menuVisibility?n.theme.theme_toggler_bgclr_active:n.theme.theme_toggler_bgclr}),h.navbar_elements_height,(function(n){return n.menuVisibility?n.theme.theme_toggler_icon_active:n.theme.icon_color}),(function(n){return"light"===n.theme.type?"0.9":"1.3"}),h.navbar_elements_height,(function(n){return n.theme.font}),(function(n){return n.menuVisibility?n.theme.theme_toggler_bgclr_active:n.theme.theme_toggler_bgclr}),h.navbar_elements_height),E=function(){var n=Object(a.useContext)(g),e=n.toggleState,t=n.isSignedIn,r=n.dispatchToggle,i=n.dispatchSignInOut,o=n.dispatchDimBgModal;Object(a.useEffect)((function(){D.handleAuthStateChange((function(){return i({type:"SIGN_IN"})}),(function(){return i({type:"SIGN_OUT"})}))}),[]);var c=Object(z.jsx)(p.b,{to:"/faekbook/profile",children:Object(z.jsxs)("div",{className:"user-profile-button",children:[Object(z.jsx)("img",{src:I,alt:"avatar"}),"Nguyen"]})}),s=Object(z.jsx)("div",{className:"log-in-button",onClick:function(){return o({type:"LOG_IN"})},children:"Log In"});return Object(z.jsxs)(C,{theme:e.isDarkTheme?f.dark:f.light,menuVisibility:e.dropDownMenuIsVisible?1:0,children:[Object(z.jsxs)("div",{className:"left",children:[Object(z.jsx)(p.b,{to:"/faekbook/",children:Object(z.jsx)(u.a,{className:"fb-icon"})}),Object(z.jsx)(p.b,{to:"/faekbook/",children:Object(z.jsx)("span",{className:"faekbook",children:"faekbook"})})]}),Object(z.jsxs)("div",{className:"right",children:[t?c:s,Object(z.jsx)("div",{className:"toggle-dropdown-menu",onClick:function(n){n.stopPropagation(),r({type:"TOGGLE_DROP_DOWN_MENU"})},children:Object(z.jsx)(b.a,{})})]})]})},G=t(39),M={isDarkTheme:!1,dropDownMenuIsVisible:!1},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TOGGLE_DARK_THEME":return Object(G.a)(Object(G.a)({},n),{},{isDarkTheme:!n.isDarkTheme});case"TOGGLE_DROP_DOWN_MENU":return Object(G.a)(Object(G.a)({},n),{},{dropDownMenuIsVisible:!n.dropDownMenuIsVisible});default:return n}},B=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SIGN_IN":return{state:!0};case"SIGN_OUT":return{state:!1};default:return n}},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:"none"},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOG_IN":return{state:"logIn"};case"SIGN_UP":return{state:"signUp"};case"CREATE_POST":return{state:"createPost"};case"NONE":return{state:"none"};default:return n}},U=t(15);function A(){var n=Object(a.useContext)(g),e=n.toggleState,t=n.dispatchDimBgModal;return Object(z.jsx)(R,{id:"turn-off-modal",theme:e.isDarkTheme?f.dark:f.light,onClick:function(){return t({type:"NONE"})},children:"+"})}var F,R=m.c.span(y||(y=Object(o.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 1.75rem;\n  font-size: 3.5rem;\n  transform: rotate(45deg);\n  color: ",";\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.font}));function V(){var n=Object(a.useState)(""),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),c=o[0],s=o[1],d=Object(a.useContext)(g),m=d.toggleState,h=d.dispatchSignInOut,u=d.dispatchDimBgModal;return Object(z.jsxs)(H,{theme:m.isDarkTheme?f.dark:f.light,children:[Object(z.jsx)(A,{}),Object(z.jsxs)("div",{id:"top",children:[Object(z.jsx)("div",{children:"Welcome Back!"}),Object(z.jsx)("input",{type:"text",value:t,onChange:function(n){return r(n.target.value)},placeholder:"Email or Phone Number"}),Object(z.jsx)("input",{type:"password",value:c,onChange:function(n){return s(n.target.value)},placeholder:"Password"}),Object(z.jsx)("button",{className:"log-in-btn",onClick:function(){D.signIn(t,c),h({type:"SIGN_IN"}),u({type:"NONE"})},children:"Log In"})]}),Object(z.jsx)("div",{className:"divider"}),Object(z.jsxs)("div",{id:"bottom",children:[Object(z.jsx)("span",{children:"New to Faekbook?"}),Object(z.jsx)("button",{className:"create-new-acc-btn",onClick:u({type:"SIGN_UP"}),children:"Create New Account"})]})]})}var W,H=m.c.div(F||(F=Object(o.a)(["\n  width: 40rem;\n  max-width: 100vw;\n  display: flex;\n  flex-flow: column;\n  padding: 1.5rem;\n  #top,\n  #bottom {\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n    row-gap: 1.25rem;\n    font-size: 1.75rem;\n  }\n  #top {\n    div {\n      align-self: flex-start;\n      font-weight: 500;\n      font-size: 2.25rem;\n      color: #1c1e21;\n      margin: 0.5rem auto 0.75rem 1rem;\n    }\n    input {\n      ","\n    }\n    .log-in-btn {\n      ","\n      width: 100%;\n      background-color: #1877f2;\n    }\n  }\n  .divider {\n    background-color: #dddfe2;\n    height: 1px;\n    width: 100%;\n    margin-block: 2rem;\n  }\n  #bottom {\n    span {\n      font-size: 1.25rem;\n    }\n    .create-new-acc-btn {\n      ","\n      width: 60%;\n    }\n  }\n"])),h.InputCSS,h.ButtonCSS,h.ButtonCSS);function q(){var n=Object(a.useContext)(g),e=n.toggleState,t=n.dispatchDimBgModal;return Object(z.jsxs)(K,{theme:e.isDarkTheme?f.dark:f.light,children:[Object(z.jsx)(A,{}),Object(z.jsxs)("div",{id:"top",children:[Object(z.jsx)("div",{children:"Sign Up"}),Object(z.jsx)("div",{children:"It's quick and easy"})]}),Object(z.jsx)("div",{className:"divider"}),Object(z.jsxs)("div",{id:"middle",children:[Object(z.jsxs)("div",{className:"full-name",children:[Object(z.jsx)("input",{type:"text",placeholder:"First name"}),Object(z.jsx)("input",{type:"text",placeholder:"Last name"})]}),Object(z.jsx)("input",{type:"email",placeholder:"Email"}),Object(z.jsx)("input",{type:"password",placeholder:"New password"}),Object(z.jsx)("button",{className:"sign-up",children:"Sign Up"})]}),Object(z.jsx)("div",{className:"divider"}),Object(z.jsxs)("div",{id:"bottom",children:[Object(z.jsx)("span",{children:"Already have an account?"}),Object(z.jsx)("button",{onClick:t({type:"LOG_IN"}),children:"Log In"})]})]})}var J,K=m.c.div(W||(W=Object(o.a)(["\n  width: 45rem;\n  max-width: 100vw;\n  #top,\n  #middle,\n  #bottom {\n    padding: 1.5rem;\n    display: flex;\n    flex-flow: column;\n    row-gap: 1rem;\n    align-items: center;\n    & button {\n      ",";\n    }\n  }\n  #top {\n    align-items: flex-start;\n    div:first-of-type {\n      font-weight: 600;\n      font-size: 3rem;\n      color: #1c1e21;\n    }\n    div:last-of-type {\n      color: #6d747c;\n      font-size: 1.5rem;\n    }\n  }\n  #middle {\n    font-size: 1.5rem;\n    & input {\n      ","\n    }\n    .full-name {\n      width: 100%;\n      display: flex;\n      column-gap: 0.75rem;\n    }\n    button {\n      margin-top: 1.5rem;\n    }\n  }\n  #bottom {\n    span {\n      font-size: 1.25rem;\n    }\n    button {\n      font-size: 1.5rem;\n      width: 50%;\n      background-color: #1877f2;\n    }\n  }\n  .divider {\n    background-color: #dddfe2;\n    height: 1px;\n    width: 100%;\n  }\n"])),h.ButtonCSS,h.InputCSS);function X(){var n=Object(a.useContext)(g),e=n.toggleState,t=n.dispatchDimBgModal;return Object(z.jsxs)(Q,{theme:e.isDarkTheme?f.dark:f.light,children:[Object(z.jsx)("img",{src:I,alt:"avatar"}),Object(z.jsx)("div",{onClick:function(){return t({type:"CREATE_POST"})},children:"What's on your mind?"})]})}var Z,Q=m.c.section(J||(J=Object(o.a)(["\n  background-color: ",";\n  width: 50rem;\n  max-width: 100%;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  margin-inline: auto;\n  border-radius: 1rem;\n  margin-top: 2rem;\n  img {\n    height: 4rem;\n    width: 4rem;\n  }\n  div {\n    color: ",";\n    flex-grow: 1;\n    padding-left: 2rem;\n    font-size: 1.5rem;\n    height: 4rem;\n    border-radius: 2rem;\n    background: ",";\n    display: flex;\n    align-items: center;\n    &:hover {\n      cursor: pointer;\n      filter: brightness(",");\n    }\n  }\n"])),(function(n){return n.theme.main_bgclr}),(function(n){return n.theme.font_lighter}),(function(n){return n.theme.whats_on_ur_mind_bgclr}),(function(n){return"dark"===n.theme.type?"1.1":"0.95"})),Y=m.c.div(Z||(Z=Object(o.a)(["\n  color: ",";\n"])),(function(n){return n.theme.font})),$=function(){var n=Object(a.useContext)(g).toggleState;return Object(z.jsx)(Y,{theme:n.isDarkTheme?f.dark:f.light,children:Object(z.jsx)(X,{})})},nn=t(33),en=t.p+"static/media/cover_photo.d46f5c33.jpg",tn=t(59);var rn,on,an=t(38),cn=t(78),sn=Object(m.c)("section")(rn||(rn=Object(o.a)(["\n  background-color: ",";\n  color: ",";\n  width: 50rem;\n  max-width: 100%;\n  margin-inline: auto;\n  border-radius: 1rem;\n  margin-top: 2rem;\n  padding-bottom: 1.5rem;\n  #user-info {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    column-gap: 1rem;\n    padding: 1.5rem 1.5rem 0;\n    img {\n      height: 4rem;\n      width: 4rem;\n    }\n    .info {\n      flex-grow: 1;\n      display: flex;\n      flex-flow: column;\n      justify-content: space-around;\n      height: 3.5rem;\n      .name {\n        font-size: 1.5rem;\n        font-weight: 700;\n        color: ",";\n      }\n      .time {\n      }\n    }\n  }\n  #content {\n    font-size: 1.5rem;\n    padding: 1.5rem 1.5rem 0;\n  }\n  #likes {\n    padding: 1.5rem 1.5rem 0;\n    display: flex;\n    align-items: center;\n    column-gap: 0.5rem;\n    img {\n      height: 1.75rem;\n      width: 1.75rem;\n    }\n    span {\n      font-size: 1.25rem;\n    }\n  }\n  #like-comment {\n    border-block: "," 1px solid;\n    margin-top: 1.5rem;\n    padding: 0.5rem 1.5rem;\n    display: flex;\n    justify-content: space-between;\n    column-gap: 0.5rem;\n    .like,\n    .comments {\n      height: 3.25rem;\n      border-radius: ",";\n      width: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      column-gap: 0.75rem;\n      background-color: ",";\n      font-size: 1.25rem;\n      font-weight: 600;\n      .icon {\n        font-size: 1.75rem;\n      }\n      &:hover {\n        cursor: pointer;\n        background-color: ",";\n      }\n    }\n    .like {\n      color: #036ee2;\n    }\n  }\n  #comment-input {\n    background-color: ",";\n    display: flex;\n    align-items: center;\n    column-gap: 1rem;\n    padding: 1.5rem 1.5rem 0;\n    img {\n      height: 3.5rem;\n      width: 3.5rem;\n    }\n    input {\n      height: 3.5rem;\n      color: ",";\n      border: none;\n      outline: none;\n      flex-grow: 1;\n      padding-left: 1.25rem;\n      font-size: 1.5rem;\n      border-radius: 2rem;\n      background: ",";\n      display: flex;\n      align-items: center;\n      &:hover {\n        cursor: text;\n        filter: brightness(",");\n      }\n      &::placeholder {\n        color: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.main_bgclr}),(function(n){return n.theme.font_lighter}),(function(n){return n.theme.font}),(function(n){return n.isDarkTheme?"#2f3031":"#dddfe2"}),h.dropdown_menu_bdr_rds,(function(n){return n.theme.main_bgclr}),(function(n){return n.isDarkTheme?"#64646471":"#ebebebae"}),(function(n){return n.theme.main_bgclr}),(function(n){return n.theme.font}),(function(n){return n.theme.whats_on_ur_mind_bgclr}),(function(n){return n.isDarkTheme?"1.1":"0.95"}),(function(n){return n.theme.font_lighter})),dn=function(n){var e=n.first_name,t=n.last_name,r=(n.avatar,n.date_created),i=n.content,o=n.likes,c=Object(a.useContext)(g).toggleState;return Object(z.jsxs)(sn,{theme:c.isDarkTheme?f.dark:f.light,isDarkTheme:c.isDarkTheme?1:0,children:[Object(z.jsxs)("div",{id:"user-info",children:[Object(z.jsx)("img",{src:I,alt:"avatar"}),Object(z.jsxs)("div",{className:"info",children:[Object(z.jsx)("div",{className:"name",children:e+" "+t}),Object(z.jsx)("div",{className:"time",children:Object(cn.a)(r,"MMM d")})]})]}),Object(z.jsx)("main",{id:"content",children:i}),o>0&&Object(z.jsxs)("div",{id:"likes",children:[Object(z.jsx)("img",{src:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e",alt:""}),Object(z.jsx)("span",{children:o})]}),Object(z.jsxs)("div",{id:"like-comment",children:[Object(z.jsxs)("div",{className:"like",children:[Object(z.jsx)(nn.b,{className:"icon"}),Object(z.jsx)("span",{children:"Like"})]}),Object(z.jsxs)("div",{className:"comments",children:[Object(z.jsx)(an.a,{className:"icon"}),Object(z.jsx)("span",{children:"View Comments"})]})]}),Object(z.jsxs)("div",{id:"comment-input",children:[Object(z.jsx)("img",{src:I,alt:"avatar"}),Object(z.jsx)("input",{placeholder:"Write a comment..."})]})]})},ln=t.p+"static/media/default_user.4255cca7.png",mn={auth:{email:"luan@gmail.com",password:"luanluanluan"},first_name:"Thanh Luan",last_name:"Nguyen",avatar:ln,posts:[{date:new Date(2021,5,10),content:"good day aint it",likes:["hiep@gmail.com","long@gmail.com"],comments:[{date:new Date(2021,5,30),commenter:"hiep@gmail.com",content:"that's right babe"}]},{date:new Date(2021,5,20),content:"today was shitty",likes:["hiep@gmail.com"],comments:[{date:new Date(2021,5,30),commenter:"hiep@gmail.com",content:"that's right babe"}]}],theme:"dark"};function hn(){var n=Object(a.useContext)(g).toggleState,e=Object(a.useState)(""),t=Object(l.a)(e,2),r=t[0],i=t[1],o=Object(a.useState)(!1),c=Object(l.a)(o,2),s=c[0],d=c[1],m=function(){var n=Object(a.useState)({width:void 0,height:void 0}),e=Object(l.a)(n,2),t=e[0],r=e[1];return Object(a.useEffect)((function(){function n(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",n),n(),function(){return window.removeEventListener("resize",n)}}),[]),t}();Object(a.useEffect)((function(){var n=new tn.a,e=document.querySelector("#get-dominant-clr");e.onload=function(){var t=n.getColor(e).toString();i(t)}}),[]),Object(a.useEffect)((function(){var n=m.width;d(void 0!==n&&n<=900)}),[m]);var h=Object(z.jsx)("img",{src:en,alt:"colorthief",id:"get-dominant-clr",style:{display:"none"}}),u=mn.posts.map((function(n){return Object(z.jsx)(dn,{first_name:mn.first_name,last_name:mn.last_name,avatar:mn.avatar,date_created:n.date,content:n.content,likes:n.likes.length})}));return Object(z.jsxs)(gn,{theme:n.isDarkTheme?f.dark:f.light,coverPhoto:en,bgGradient:r,editCoverPhotoHidden:s,children:[Object(z.jsxs)("header",{children:[Object(z.jsxs)("div",{id:"cover-picture",children:[h,Object(z.jsxs)("div",{className:"avatar-picture",children:[Object(z.jsx)("img",{src:I,alt:"avatar"}),Object(z.jsx)("div",{className:"update-avatar",children:n.isDarkTheme?Object(z.jsx)(nn.a,{className:"icon",style:{fill:"white"}}):Object(z.jsx)(nn.c,{className:"icon"})})]}),Object(z.jsxs)("div",{className:"edit-cover-photo",children:[Object(z.jsx)(nn.a,{className:"icon"})," ",Object(z.jsx)("span",{children:"Edit Cover Photo"})]})]}),Object(z.jsxs)("div",{id:"intro",children:[Object(z.jsx)("div",{className:"name",children:"Thanh Luan Nguyen"}),Object(z.jsx)("div",{className:"short-description",children:"Why did you change? Why did you bend and break?"})]})]}),Object(z.jsxs)("main",{children:[Object(z.jsx)(X,{}),u]})]})}var un,bn,gn=Object(m.c)("div")(on||(on=Object(o.a)(["\n  color: ",";\n  padding-bottom: 2rem;\n  header {\n    background-color: ",";\n    background: linear-gradient(\n      180deg,\n      rgba(",") 0%,\n      "," 50%\n    );\n    #cover-picture {\n      position: relative;\n      background-image: url(",");\n      background-size: cover;\n      background-position: 50% 40%;\n      width: 70rem;\n      max-width: 100%;\n      aspect-ratio: 7/3;\n      margin-inline: auto;\n      border-radius: 0 0 10px 10px;\n      .avatar-picture {\n        position: absolute;\n        bottom: -2rem;\n        left: 50%;\n        transform: translateX(-50%);\n        width: 15rem;\n        height: 15rem;\n        padding: 0.5rem;\n        background-color: ",";\n        border-radius: 50%;\n        img {\n          width: 100%;\n          height: 100%;\n        }\n        .update-avatar {\n          position: absolute;\n          right: 1.1rem;\n          bottom: 1.1rem;\n          padding: 0.5rem;\n          border-radius: 50%;\n          background-color: ",";\n          &:hover {\n            cursor: pointer;\n            filter: brightness(1.1);\n          }\n          .icon {\n            height: 2rem;\n            width: 2rem;\n          }\n        }\n      }\n      .edit-cover-photo {\n        color: black;\n        position: absolute;\n        right: 2rem;\n        bottom: 3rem;\n        background-color: white;\n        padding: 0.5rem 1rem;\n        display: flex;\n        align-items: center;\n        column-gap: 1rem;\n        border-radius: 7px;\n        &:hover {\n          cursor: pointer;\n          filter: brightness(0.95);\n        }\n        .icon {\n          height: 2rem;\n          width: 2rem;\n        }\n        span {\n          font-size: 1.2rem;\n          font-weight: 700;\n          display: ",";\n        }\n      }\n    }\n    #intro {\n      padding: 3rem 2rem 2rem;\n      text-align: center;\n      .name {\n        font-size: 3.5rem;\n        font-weight: 800;\n      }\n      .short-description {\n        padding-top: 1rem;\n        font-size: 1.75rem;\n      }\n    }\n  }\n  main {\n  }\n"])),(function(n){return n.theme.font}),(function(n){return n.theme.main_bgclr}),(function(n){return n.bgGradient}),(function(n){return n.theme.main_bgclr}),(function(n){return n.coverPhoto}),(function(n){return n.theme.main_bgclr}),(function(n){return n.theme.avatar_pic_cam_icon_bgclr}),(function(n){return n.editCoverPhotoHidden?"none":"block"})),fn=Object(m.c)("div")(un||(un=Object(o.a)(["\n  background: ",";\n  width: 30rem;\n  position: absolute;\n  border-radius: ",";\n  right: 1rem;\n  top: 5rem;\n  box-shadow: ",";\n  padding: 1rem;\n  z-index: 100;\n  /* profile, theme-toggler and log-in-out */\n  a > .profile,\n  .theme-toggler,\n  .log-in-out {\n    display: flex;\n    cursor: pointer;\n    border-radius: ",";\n    padding: 0.5rem;\n    column-gap: 1rem;\n    &:hover {\n      background-color: ",";\n    }\n  }\n  /* profile */\n  a {\n    text-decoration: none;\n    pointer-events: ",";\n    .profile {\n      opacity: ",";\n      img {\n        border-radius: 50%;\n        height: 5rem;\n        background: ",";\n      }\n      .name {\n        display: flex;\n        flex-flow: column;\n        justify-content: space-evenly;\n        span:first-of-type {\n          font-size: 1.3rem;\n          font-weight: 600;\n          color: ",";\n        }\n        span:last-of-type {\n          font-size: 1.1375rem;\n          color: ",";\n        }\n      }\n    }\n  }\n  .divider {\n    margin-block: 0.5rem;\n    height: 2px;\n    width: 100%;\n    background: ",";\n  }\n  /* theme-toggler and log-in-out */\n  .theme-toggler,\n  .log-in-out {\n    align-items: center;\n    color: ",";\n    font-weight: 700;\n    .icon {\n      height: ",";\n      width: ",";\n      border-radius: 50%;\n      font-size: 2rem;\n      background: ",";\n      fill: ",";\n    }\n  }\n  .theme-toggler {\n    .icon {\n      display: grid;\n      place-items: center;\n    }\n  }\n  .log-in-out {\n    .icon {\n      position: relative;\n      svg {\n        position: absolute;\n        top: 0.7rem;\n        left: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.main_bgclr}),h.dropdown_menu_bdr_rds,(function(n){return n.theme.bxShdw}),h.dropdown_menu_bdr_rds,(function(n){return n.theme.hover}),(function(n){return n.isSignedIn?"auto":"none"}),(function(n){return n.isSignedIn?"100%":"30%"}),(function(n){return n.theme.theme_toggler_bgclr}),(function(n){return n.theme.font}),(function(n){return n.theme.font_lighter}),(function(n){return n.theme.divider_clr}),(function(n){return n.theme.font}),h.navbar_elements_height,h.navbar_elements_height,(function(n){return n.theme.theme_toggler_bgclr}),(function(n){return n.theme.icon_color}),(function(n){return n.isSignedIn?"0.7rem":"0.5rem"})),pn=function(){var n=Object(a.useContext)(g),e=n.toggleState,t=n.isSignedIn,r=n.dispatchToggle,i=n.dispatchDimBgModal,o=Object(U.f)(),c=Object(z.jsx)("img",{src:t?I:ln,alt:"avatar"});return Object(z.jsxs)(fn,{theme:e.isDarkTheme?f.dark:f.light,isSignedIn:t?1:0,onClick:function(n){return n.stopPropagation()},children:[Object(z.jsx)(p.b,{to:"/faekbook/profile",onClick:function(){return t&&r({type:"TOGGLE_DROP_DOWN_MENU"})},children:Object(z.jsxs)("div",{className:"profile",children:[c,Object(z.jsxs)("div",{className:"name",children:[Object(z.jsx)("span",{children:t?"Nguyen Thanh Luan":"User"}),Object(z.jsx)("span",{children:t?"See your profile":"Please log in"})]})]})}),Object(z.jsx)("div",{className:"divider"}),Object(z.jsxs)("div",{className:"theme-toggler",onClick:function(){r({type:"TOGGLE_DARK_THEME"}),r({type:"TOGGLE_DROP_DOWN_MENU"})},children:[Object(z.jsx)("div",{className:"icon",children:e.isDarkTheme?Object(z.jsx)(u.c,{}):Object(z.jsx)(u.b,{})}),"Change to ",e.isDarkTheme?"Light":"Dark"," theme"]}),Object(z.jsxs)("div",{className:"log-in-out",onClick:function(){r({type:"TOGGLE_DROP_DOWN_MENU"}),t?(D.signOut(),o.push("/faekbook/")):i({type:"LOG_IN"})},children:[Object(z.jsx)("div",{className:"icon",children:t?Object(z.jsx)(an.c,{}):Object(z.jsx)(an.b,{})}),"Log ",t?"Out":"In"]})]})};function jn(){var n=Object(a.useState)(0),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useContext)(g).toggleState;return Object(z.jsxs)(_n,{theme:i.isDarkTheme?f.dark:f.light,isDarkTheme:i.isDarkTheme?1:0,textSmallSize:t>40?1:0,postButtonActivated:t>0?1:0,children:[Object(z.jsx)(A,{}),Object(z.jsx)("div",{id:"top",children:Object(z.jsx)("div",{children:"Create Post"})}),Object(z.jsx)("div",{className:"divider"}),Object(z.jsxs)("div",{id:"middle",children:[Object(z.jsx)("img",{src:I,alt:"my_avatar"}),Object(z.jsx)("div",{className:"name",children:"Jone Leto"})]}),Object(z.jsx)("textarea",{placeholder:"What's on your mind?",onChange:function(n){return r(n.target.value.length)}}),Object(z.jsx)("div",{className:"post-button",children:Object(z.jsx)("button",{children:"Post"})})]})}var xn,On,vn,_n=Object(m.c)("div")(bn||(bn=Object(o.a)(["\n  width: 50rem;\n  max-width: 100vw;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n\n  #middle,\n  textarea,\n  .post-button {\n    padding: 1.5rem 1.5rem;\n  }\n\n  #top {\n    line-height: 5.5rem;\n    text-align: center;\n    font-size: 2.5rem;\n    font-weight: 700;\n    height: 5.5rem;\n  }\n  #middle {\n    display: flex;\n    align-items: center;\n    column-gap: 1rem;\n    img {\n      height: 4rem;\n      width: 4rem;\n    }\n    .name {\n      font-size: 1.5rem;\n      font-weight: 500;\n    }\n  }\n\n  textarea {\n    padding-top: 0;\n    background-color: inherit;\n    font-family: inherit;\n    font-size: ",";\n    display: block;\n    border: none;\n    outline: none;\n    width: 100%;\n    min-height: 15rem;\n    resize: none;\n    color: ",";\n    overflow-y: auto;\n    &::-webkit-scrollbar {\n      width: 0.75rem;\n      border-radius: 3px;\n      background-color: rgba(195, 195, 195, 0.3);\n    }\n    &::-webkit-scrollbar-thumb {\n      border-radius: 3px;\n      background: rgba(114, 114, 114, 0.5);\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n  .post-button {\n    button {\n      width: 100%;\n      height: 3.5rem;\n      font-size: 1.5rem;\n      font-weight: 700;\n      border-radius: ",";\n      margin-inline: auto;\n      border: none;\n      color: ",";\n      background-color: ",";\n      &:hover {\n        cursor: ",";\n      }\n    }\n  }\n\n  .divider {\n    background-color: ",";\n    margin-inline: auto;\n    height: 1px;\n    width: 100%;\n  }\n"])),(function(n){return n.theme.main_bgclr}),(function(n){return n.theme.font}),(function(n){return n.textSmallSize?"1.5rem":"2.5rem"}),(function(n){return n.theme.font}),h.dropdown_menu_bdr_rds,(function(n){return n.postButtonActivated?"white":"#858686"}),(function(n){return n.postButtonActivated?"#2D88FF":n.isDarkTheme?"#505151":"#e4e6eb"}),(function(n){return n.postButtonActivated?"pointer":"not-allowed"}),(function(n){return n.isDarkTheme?"#2f3031":"#dddfe2"})),kn=Object(m.b)(xn||(xn=Object(o.a)(["\n  content: '';\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  z-index: 100;\n"]))),wn=Object(m.c)("div")(On||(On=Object(o.a)(["\n  position: relative;\n  background: ",";\n  min-height: 100vh;\n  &::after {\n    ","\n    background-color: ",";\n  }\n  .dim-bg-modal {\n    position: fixed;\n    background: white;\n    border-radius: 10px;\n    top: 15rem;\n    left: 50%;\n    transform: translateX(-50%);\n    z-index: 200;\n    border-radius: 10px;\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.body}),(function(n){return("none"!==n.authenType||n.toggleState.createPostIsVisible)&&kn}),(function(n){return"dark"===n.theme.type?"#00000063":"#ffffff92"}),(function(n){return n.theme.bxShdw})),yn=function(){var n=Object(a.useReducer)(L,{isDarkTheme:!1,dropDownMenuIsVisible:!1}),e=Object(l.a)(n,2),t=e[0],r=e[1],i=Object(a.useReducer)(B,{state:!1}),o=Object(l.a)(i,2),c=o[0],s=o[1],d=Object(a.useReducer)(P,{state:"none"}),m=Object(l.a)(d,2),h=m[0],u=m[1];return Object(a.useEffect)((function(){}),[]),Object(z.jsx)(g.Provider,{value:{toggleState:t,dispatchToggle:r,isSignedIn:c.state,dispatchSignInOut:s,dimBgModal:h,dispatchDimBgModal:u},children:Object(z.jsx)(p.a,{children:Object(z.jsxs)(wn,{theme:!0===t.isDarkTheme?f.dark:f.light,authenType:h.state,toggleState:t,onClick:function(){return t.dropDownMenuIsVisible&&r({type:"TOGGLE_DROP_DOWN_MENU"})},children:[Object(z.jsx)(E,{}),Object(z.jsxs)(U.c,{children:[Object(z.jsx)(U.a,{exact:!0,path:"/faekbook/",component:$}),Object(z.jsx)(U.a,{exact:!0,path:"/faekbook/profile",component:hn})]}),Object(z.jsx)("div",{className:"dim-bg-modal",children:function(n){switch(n){case"logIn":return Object(z.jsx)(V,{});case"signUp":return Object(z.jsx)(q,{});case"createPost":return Object(z.jsx)(jn,{});case"none":return}}(h.state)}),t.dropDownMenuIsVisible&&Object(z.jsx)(pn,{})]})})})},Nn=(t(75),Object(m.a)(vn||(vn=Object(o.a)(["\n    * {\n       box-sizing: border-box;\n    }\n    html {\n      font-size: 70%;\n      @media (min-width: 768px) {\n        font-size: 80%;\n      }\n      @media (min-width: 1024px) {\n        font-size: 90%;\n      }\n      @media (min-width: 1200px) {\n        font-size: 100%;\n      }\n    }\n    \n    body {\n      font-size: 1em;\n      font-family: 'Roboto', sans-serif;\n      user-select: none;\n    }\n\n    img {\n      border-radius: 50%;\n    }\n  "]))));d.a.render(Object(z.jsxs)(c.a.StrictMode,{children:[Object(z.jsx)(Nn,{}),Object(z.jsx)(yn,{})]}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.413da2dd.chunk.js.map