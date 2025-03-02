import{c as g,o as h,a as f,t as w,d as P,r as o,b as k,e as d,w as G,n as B}from"./main-iIfm7i6Y.js";const L={name:"FormField",props:{id:{type:String,required:!0},label:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},modelValue:{type:String,required:!0}},methods:{handleInput(e){const l=e.target;l&&this.$emit("update:modelValue",l.value)}}},N=(e,l)=>{const a=e.__vccOpts||e;for(const[e,o]of l)a[e]=o;return a},Q={class:"form-field"},W=["for"],A=["type","id","placeholder","required","maxlength","value"];function z(e,l,a,o,d,u){return h(),g("div",Q,[f("label",{for:a.id},w(a.label),9,W),f("input",{type:a.type,id:a.id,placeholder:a.placeholder,required:a.required,maxlength:a.maxlength,value:a.modelValue,onInput:l[0]||(l[0]=(...e)=>u.handleInput&&u.handleInput(...e))},null,40,A)])}const v=N(L,[["render",z],["__scopeId","data-v-73e5441a"]]),H={name:"FormTextarea",props:{id:{type:String,required:!0},label:{type:String,required:!0},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},modelValue:{type:String,required:!0}},methods:{handleInput(e){const l=e.target;l&&this.$emit("update:modelValue",l.value)}}},J={class:"form-field"},K=["for"],X=["id","placeholder","required","value"];function Y(e,l,a,o,d,u){return h(),g("div",J,[f("label",{for:a.id},w(a.label),9,K),f("textarea",{id:a.id,placeholder:a.placeholder,required:a.required,value:a.modelValue,onInput:l[0]||(l[0]=(...e)=>u.handleInput&&u.handleInput(...e))},null,40,X)])}const i=N(H,[["render",Y],["__scopeId","data-v-c292ec08"]]),Z={class:B(["form-container"])},ee={key:0,class:"toast success"},le={key:1,class:"toast error"},oe=P({__name:"Form1",setup(e){const l=atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM0NTc1MjQyNDE5OTA5NDQwMi9qb1hmT0tWYWE4M0poNHFtbUttUGhpWVB4T0RjMmpTN3ZmOU0yRWRlUDNxV1Q5T0wyc1dNRmVQbzl2SzVmT0hOWkw1cwo="),a=o(""),u=o(""),r=o(""),t=o(""),n=o(""),m=o(""),s=o(""),p=o(""),c=o(""),V=o(""),b=o(""),y=o(""),q=o(""),D=o(""),I=o(""),x=o(""),E=o("");async function S(){const e=[`- **Nombre y Apellidos IC:** ${a.value}`,`- **Edad IC:** ${u.value}`,`- **Edad OOC:** ${r.value}`,`- **ID de Discord:** ${t.value}`,`- **URL de Steam:** ${n.value}`,`- **Tiempo Disponible Diario:** ${m.value}`,`- **Conocimiento del Rol de EMS:** ${s.value}`,`- **Experiencias en Otras Ciudades:** ${p.value}`,`- **Ejemplo de /me:** ${V.value}`,`- **Ejemplo de /do:** ${b.value}`,`- **¿Qué medicamentos usarías para una infección?:** ${y.value}`,`- **Define DM:** ${q.value}`,`- **Define PG:** ${D.value}`,`- **Define Carjack:** ${I.value}`];try{await async function(e){let l="# Nueva Respuesta Formulario SAMS 1:\n";const a="Muhaddil Form Sender",o="https://github.com/Muhaddil/simple-form-sender/blob/main/src/images/muha2.png?raw=true";for(const d of e)l.length+d.length+1>2e3?(await U(l.trim(),a,o),l=d+"\n"):l+=d+"\n";l.trim().length>0&&await U(l.trim(),a,o)}(e),x.value="Mensaje enviado con éxito",E.value="",setTimeout((()=>{x.value=""}),5e3),a.value="",u.value="",r.value="",t.value="",n.value="",m.value="",s.value="",p.value="",c.value="",V.value="",b.value="",y.value="",q.value="",D.value="",I.value=""}catch(e){x.value="",E.value="Error al enviar el mensaje.",setTimeout((()=>{E.value=""}),5e3),console.error(e)}}async function U(e,a,o){if(await async function(e){return new Promise((l=>setTimeout(l,e)))}(200),!e.trim())throw new Error("El contenido del mensaje está vacío.");const d=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,avatar_url:o,content:e})}),u=await d.text();if(!d.ok)throw new Error(`Error en la respuesta del servidor: ${d.status} - ${u}`)}return(e,l)=>(h(),g("div",Z,[f("form",{onSubmit:G(S,["prevent"]),class:"form"},[d(v,{id:"name",label:"Nombre y Apellidos IC",type:"text",placeholder:"Ingresa tu nombre y apellidos IC",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),required:""},null,8,["modelValue"]),d(v,{id:"ageIC",label:"Edad IC",type:"text",placeholder:"Ingresa tu edad IC",modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),required:"",maxlength:2},null,8,["modelValue"]),d(v,{id:"ageOOC",label:"Edad OOC",type:"text",placeholder:"Ingresa tu edad OOC",modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value=e),required:"",maxlength:2},null,8,["modelValue"]),d(v,{id:"discordId",label:"ID de Discord",type:"text",placeholder:"Ingresa tu ID de Discord",modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=e=>t.value=e),required:""},null,8,["modelValue"]),d(v,{id:"steamUrl",label:"URL de Steam",type:"url",placeholder:"Ingresa tu URL de Steam",modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=e=>n.value=e),required:""},null,8,["modelValue"]),d(v,{id:"dailyTime",label:"Tiempo Disponible Diario",type:"text",placeholder:"Ejemplo: 2 horas diarias",modelValue:m.value,"onUpdate:modelValue":l[5]||(l[5]=e=>m.value=e),required:""},null,8,["modelValue"]),d(i,{id:"emsRoleKnowledge",label:"Conocimiento del Rol de EMS",placeholder:"Describe tu conocimiento sobre el rol de EMS",modelValue:s.value,"onUpdate:modelValue":l[6]||(l[6]=e=>s.value=e),required:""},null,8,["modelValue"]),d(i,{id:"previousExperiences",label:"Experiencias en Otras Ciudades",placeholder:"Describe tus experiencias previas",modelValue:p.value,"onUpdate:modelValue":l[7]||(l[7]=e=>p.value=e),required:""},null,8,["modelValue"]),d(i,{id:"whyChooseMe",label:"¿Por qué deberíamos elegirte?",placeholder:"Explica por qué deberíamos elegirte",modelValue:c.value,"onUpdate:modelValue":l[8]||(l[8]=e=>c.value=e),required:""},null,8,["modelValue"]),d(i,{id:"exampleMe",label:"Ejemplo de /me",placeholder:"Proporciona un ejemplo de /me",modelValue:V.value,"onUpdate:modelValue":l[9]||(l[9]=e=>V.value=e),required:""},null,8,["modelValue"]),d(i,{id:"exampleDo",label:"Ejemplo de /do",placeholder:"Proporciona un ejemplo de /do",modelValue:b.value,"onUpdate:modelValue":l[10]||(l[10]=e=>b.value=e),required:""},null,8,["modelValue"]),d(i,{id:"medicationForInfection",label:"¿Qué medicamentos usarías para una infección?",placeholder:"Describe los medicamentos que usarías",modelValue:y.value,"onUpdate:modelValue":l[11]||(l[11]=e=>y.value=e),required:""},null,8,["modelValue"]),d(i,{id:"defineDM",label:"Define DM",placeholder:"Define DM con tus palabras",modelValue:q.value,"onUpdate:modelValue":l[12]||(l[12]=e=>q.value=e),required:""},null,8,["modelValue"]),d(i,{id:"definePG",label:"Define PG",placeholder:"Define PG con tus palabras",modelValue:D.value,"onUpdate:modelValue":l[13]||(l[13]=e=>D.value=e),required:""},null,8,["modelValue"]),d(i,{id:"defineCarjack",label:"Define Carjack",placeholder:"Define Carjack con tus palabras",modelValue:I.value,"onUpdate:modelValue":l[14]||(l[14]=e=>I.value=e),required:""},null,8,["modelValue"]),l[15]||(l[15]=f("button",{type:"submit"},"Enviar",-1))],32),x.value?(h(),g("div",ee,w(x.value),1)):k("",!0),E.value?(h(),g("div",le,w(E.value),1)):k("",!0)]))}});export{oe as default};
