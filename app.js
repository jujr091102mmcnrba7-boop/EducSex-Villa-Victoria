const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const detailDialog = $("#detailDialog");
function toast(message){const old=$(".toast");if(old)old.remove();const t=document.createElement("div");t.className="toast";t.textContent=message;document.body.append(t);setTimeout(()=>t.remove(),3000)}
// La plataforma solo se muestra después de completar el formulario de inicio.
const registeredName = (sessionStorage.getItem("educsex_alias") || "").trim();
const registeredGroup = (sessionStorage.getItem("educsex_group") || "").trim();
if(!registeredName){window.location.replace("index.html");}
else {
  const welcome = $("#userWelcome");
  if(welcome) welcome.textContent = `¡Hola, ${registeredName}!${registeredGroup ? ` · Grupo ${registeredGroup}` : ""}`;
  const topbarRight = $(".topbar-right");
  if(topbarRight) topbarRight.textContent = `Sesión de ${registeredName} · Información · Respeto · Confidencialidad`;
  const heroTitle = $(".hero h1");
  if(heroTitle) heroTitle.innerHTML = `¡Hola, ${registeredName.replace(/[&<>\"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;", "'":"&#39;"}[c]))}!<br><span>Este espacio es para ti.</span>`;
}
const menuToggle=$("#menuToggle"), mainNav=$("#mainNav");
menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰"});
$$("#mainNav a").forEach(a=>a.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰"}));
const methodDetails={
condon:["Condón externo e interno","El condón crea una barrera que ayuda a prevenir el embarazo y reduce el riesgo de muchas infecciones de transmisión sexual. Revisa el empaque y la fecha de caducidad, usa uno nuevo cada vez y sigue las instrucciones del producto. Si tienes dudas sobre su uso, solicita orientación profesional."],
pastillas:["Pastillas anticonceptivas","Son un método hormonal que requiere seguir un horario y las indicaciones del producto. Algunos medicamentos y ciertas condiciones de salud pueden influir en cuál es la opción adecuada. No protegen contra infecciones de transmisión sexual. Consulta a personal de salud antes de elegirlas."],
larga:["Implante e DIU","El implante y los dispositivos intrauterinos son métodos reversibles de larga duración que deben ser colocados y retirados por personal capacitado. La elegibilidad, posibles efectos y seguimiento se revisan en consulta. No protegen contra infecciones de transmisión sexual."],
otros:["Inyección y otros métodos","Las inyecciones y otros métodos hormonales tienen pautas distintas de aplicación. La elección debe considerar salud, preferencias y posibles efectos secundarios. El personal de salud puede explicar opciones, uso correcto y qué hacer si se retrasa una dosis."]
};
$$("[data-method]").forEach(b=>b.addEventListener("click",()=>{const d=methodDetails[b.dataset.method];$("#detailTitle").textContent=d[0];$("#detailText").textContent=d[1];detailDialog.showModal()}));
$$(".myth-card").forEach(b=>b.addEventListener("click",()=>{b.classList.toggle("open");b.setAttribute("aria-expanded",String(b.classList.contains("open")))}));
const faq={
embarazo:[
["¿Qué es el embarazo adolescente?","Es un embarazo que ocurre durante la adolescencia. Cada situación es distinta y merece atención médica, información confiable y apoyo sin juicios."],
["¿Puede ocurrir un embarazo la primera vez?","Sí. Puede ocurrir en cualquier relación vaginal sin protección, incluso si es la primera vez."],
["¿Cuáles son algunos factores asociados?","Pueden influir la falta de información, las barreras para acceder a servicios, la presión de pareja, la violencia y la dificultad para negociar decisiones."],
["¿Qué hago si creo que estoy embarazada?","Busca una prueba de embarazo y orientación en un centro de salud. El personal puede explicar los siguientes pasos según tu situación."],
["¿Cuándo es útil una prueba de embarazo?","Sigue las instrucciones de la prueba y consulta al personal de salud si el resultado es confuso, hay retraso menstrual o persisten las dudas."],
["¿El estrés puede retrasar la menstruación?","Sí, el estrés puede influir en el ciclo, pero no permite descartar un embarazo. Si hubo posibilidad de embarazo, considera una prueba y orientación profesional."],
["¿Qué señales pueden aparecer al inicio del embarazo?","Puede haber retraso menstrual, náuseas o cansancio, pero los síntomas varían y no confirman por sí solos un embarazo."],
["¿Un calendario menstrual evita el embarazo?","No es completamente fiable por sí solo, especialmente si los ciclos varían. Consulta opciones anticonceptivas con personal de salud."],
["¿Qué consecuencias puede tener un embarazo adolescente?","Puede implicar retos de salud, emocionales, escolares, familiares y económicos. La atención oportuna y el apoyo pueden ayudar."],
["¿Cómo puedo apoyar a una amiga embarazada?","Escúchala sin juzgar, respeta su privacidad y anímala a buscar atención médica y apoyo de una persona adulta confiable."],
["¿El embarazo se puede confirmar por síntomas?","No. Los síntomas no son suficientes para confirmarlo; una prueba y orientación de salud ayudan a aclararlo."],
["¿Qué es la atención prenatal?","Es la atención de salud durante el embarazo para revisar el bienestar de la persona embarazada y del bebé, identificar riesgos y ofrecer orientación."],
["¿Puedo pedir orientación si soy menor de edad?","Puedes acercarte a un centro de salud o a una persona adulta confiable. Pregunta al servicio cómo protege tu privacidad y qué atención puede ofrecer."],
["¿Qué es un embarazo no planeado?","Es un embarazo que ocurre cuando no se tenía la intención o el plan de embarazarse en ese momento."],
["¿Dónde puedo hablar si tengo miedo?","Busca una persona adulta de confianza, personal de salud o apoyo psicológico. Si hay peligro inmediato, acude a servicios de emergencia."]
],
metodos:[
["¿Qué son los métodos anticonceptivos?","Son métodos que ayudan a prevenir el embarazo. Sus características, eficacia y forma de uso varían; el personal de salud puede ayudarte a comparar opciones."],
["¿Qué método también ayuda a prevenir ITS?","El condón externo o interno reduce el riesgo de muchas infecciones de transmisión sexual cuando se usa correctamente y en cada relación."],
["¿Las pastillas protegen contra ITS?","No. Las pastillas ayudan a prevenir el embarazo, pero no protegen contra infecciones de transmisión sexual."],
["¿Qué es el implante anticonceptivo?","Es una pequeña varilla colocada bajo la piel por personal capacitado que libera hormona y ofrece protección anticonceptiva de larga duración."],
["¿Qué es el DIU?","Es un dispositivo colocado dentro del útero por personal de salud. Hay diferentes tipos y la orientación clínica ayuda a elegir."],
["¿Qué es la anticoncepción de emergencia?","Es una opción que puede reducir la probabilidad de embarazo después de una relación sin protección o una falla anticonceptiva. Busca orientación cuanto antes en farmacia o centro de salud."],
["¿La anticoncepción de emergencia protege de ITS?","No. No previene infecciones de transmisión sexual; pregunta por pruebas y prevención si existe riesgo."],
["¿Se puede usar condón más de una vez?","No. Usa un condón nuevo cada vez y sigue las instrucciones del empaque."],
["¿Se deben usar dos condones a la vez?","No se recomienda usar dos condones juntos porque la fricción puede aumentar la posibilidad de rotura. Sigue las instrucciones del producto."],
["¿Los métodos hormonales son iguales para todas las personas?","No. La salud, los medicamentos, preferencias y antecedentes influyen. El personal de salud puede orientar sobre opciones seguras."],
["¿El método de retiro es muy fiable?","Es menos fiable que varios métodos anticonceptivos porque puede fallar y no protege contra ITS. Considera opciones de mayor eficacia con orientación."],
["¿Los anticonceptivos causan infertilidad permanente?","Los métodos anticonceptivos habituales no suelen causar infertilidad permanente. El retorno de la fertilidad depende del método y de cada persona."],
["¿Cómo sé qué método me conviene?","Comenta tus necesidades, salud, medicamentos y preferencias con personal de salud. No existe una única opción ideal para todas las personas."],
["¿Qué hago si se rompe el condón?","Busca orientación cuanto antes sobre anticoncepción de emergencia y valora si necesitas pruebas de ITS. Un servicio de salud puede explicarte los tiempos y opciones."],
["¿Los métodos anticonceptivos tienen efectos secundarios?","Algunos pueden tener efectos secundarios y estos varían según el método y la persona. Pide orientación si algo te preocupa o es intenso."],
["¿Puedo combinar condón con otro método?","Sí, el uso del condón junto con otro método puede ayudar a prevenir embarazo y reducir el riesgo de ITS. Pide orientación sobre el uso correcto."],
["¿Dónde puedo conseguir anticonceptivos?","En centros de salud, clínicas y otros servicios autorizados. Confirma disponibilidad y solicita orientación sobre uso correcto."],
["¿Un método natural es igual de eficaz que todos los demás?","La eficacia varía entre métodos y depende mucho del uso correcto. Compara información confiable con un profesional."],
["¿Qué significa uso correcto y constante?","Significa seguir las instrucciones específicas del método en cada ocasión o en el calendario indicado para mantener su eficacia."],
["¿El condón tiene fecha de caducidad?","Sí. Revisa la fecha y el empaque; no lo uses si está dañado, seco o mal almacenado."]
],
bienestar:[
["¿Qué es el consentimiento?","Es un acuerdo libre, claro y reversible. Cualquier persona puede cambiar de opinión y nadie debe ser presionado."],
["¿Qué hago si mi pareja me presiona?","Tu límite merece respeto. Habla con una persona de confianza y busca apoyo profesional si sientes presión, miedo o control."],
["¿Cómo puedo hablar de salud sexual con un profesional?","Puedes decir que tienes dudas y pedir que te expliquen las opciones con palabras sencillas. Lleva preguntas anotadas si eso te ayuda."],
["¿La información del chatbot es un diagnóstico?","No. Este chatbot ofrece información educativa general; no puede evaluar síntomas ni sustituir una consulta."],
["¿Qué datos personales debo escribir aquí?","Ninguno. Evita compartir nombre completo, domicilio, teléfono, escuela específica, contraseñas o datos que te identifiquen."],
["¿Qué hago si tengo dolor o síntomas preocupantes?","Busca atención médica. Si los síntomas son intensos o hay peligro inmediato, acude a urgencias o contacta los servicios de emergencia locales."],
["¿Qué son las infecciones de transmisión sexual?","Son infecciones que pueden transmitirse principalmente por contacto sexual. Algunas no causan síntomas, por lo que las pruebas y la prevención son importantes."],
["¿Puedo tener una ITS sin notar síntomas?","Sí. Algunas ITS pueden no presentar síntomas. Consulta sobre pruebas si hubo una posible exposición."],
["¿Cómo reduzco el riesgo de ITS?","Usa condones correctamente, considera pruebas, consulta sobre vacunas recomendadas y busca orientación profesional sobre prevención."],
["¿Qué es la salud sexual?","Es el bienestar físico, emocional, mental y social relacionado con la sexualidad, con respeto, seguridad y ausencia de coerción."],
["¿Qué hago si alguien comparte información íntima mía sin permiso?","No es tu culpa. Busca apoyo de una persona adulta confiable y reporta la situación en la plataforma correspondiente. Si estás en peligro, pide ayuda inmediata."],
["¿Cómo apoyo a alguien sin juzgar?","Escucha, respeta su privacidad, evita difundir rumores y ayúdale a encontrar servicios confiables si lo solicita."],
["¿Puedo acudir a un centro de salud para solo preguntar?","Sí. Puedes solicitar orientación preventiva y preguntar qué servicios ofrecen, sus horarios y las reglas de privacidad."],
["¿Cómo encuentro un centro de salud cercano?","Busca el directorio oficial de servicios de salud de tu localidad o pregunta en el centro de salud municipal. Confirma dirección y horarios antes de ir."],
["¿El chatbot guarda mis conversaciones?","Esta demostración funciona en tu navegador y no envía mensajes a un servidor propio. Aun así, evita escribir información personal; el comportamiento puede cambiar si se integra un servicio externo."],
["¿Qué hago si temo una reacción familiar?","Piensa en una persona adulta confiable, orientador escolar o profesional de salud que pueda escucharte de forma segura. Si hay riesgo de violencia, prioriza tu seguridad."],
["¿Puedo decir que no aunque antes haya aceptado?","Sí. El consentimiento se puede retirar en cualquier momento y debe respetarse."],
["¿Qué es una relación saludable?","Una relación con respeto, comunicación, confianza, límites claros y decisiones sin amenazas ni presión."],
["¿Qué hago si me siento muy angustiada?","Busca a alguien de confianza y considera apoyo psicológico. Si sientes que estás en peligro, contacta servicios de emergencia locales."],
["¿Dónde puedo verificar la información?","Consulta a la Secretaría de Salud, instituciones públicas de salud y profesionales acreditados. Desconfía de promesas absolutas o consejos que sustituyen la consulta."]
]};
let activeCategory="embarazo";
const categoryNames={embarazo:"Embarazo adolescente",metodos:"Métodos anticonceptivos",bienestar:"Salud y apoyo"};
const questionSelect=$("#questionSelect"), chatMessages=$("#chatMessages");
function loadQuestions(){questionSelect.innerHTML='<option value="">Selecciona una pregunta...</option>';faq[activeCategory].forEach((item,i)=>{const o=document.createElement("option");o.value=i;o.textContent=`${i+1}. ${item[0]}`;questionSelect.append(o)})}
function addMessage(text,type="bot"){const el=document.createElement("div");el.className=type==="user"?"user-message":"bot-message";el.textContent=text;chatMessages.append(el);chatMessages.scrollTop=chatMessages.scrollHeight}
$$(".chat-tab").forEach(btn=>btn.addEventListener("click",()=>{$$(".chat-tab").forEach(b=>b.classList.toggle("active",b===btn));activeCategory=btn.dataset.category;loadQuestions();addMessage(`Categoría seleccionada: ${categoryNames[activeCategory]}. Elige una de las ${faq[activeCategory].length} preguntas para ver su respuesta.`)}));
function askSelected(){if(questionSelect.value===""){toast("Selecciona una pregunta de la categoría.");return}const item=faq[activeCategory][Number(questionSelect.value)];addMessage(item[0],"user");addMessage(item[1]);questionSelect.value=""}
$("#askQuestion").addEventListener("click",askSelected);questionSelect.addEventListener("keydown",e=>{if(e.key==="Enter")askSelected()});
const customResponses=[
{keys:["embaraz","retraso","regla","menstru","prueba"],text:"Si existe posibilidad de embarazo, una prueba y la orientación de un centro de salud pueden ayudarte a aclararlo. Los síntomas por sí solos no confirman ni descartan un embarazo."},
{keys:["condon","preservativo","its","infeccion"],text:"El condón externo o interno reduce el riesgo de muchas infecciones de transmisión sexual y también ayuda a prevenir el embarazo cuando se usa correctamente. Consulta a personal de salud para más orientación."},
{keys:["pastilla","anticoncept","metodo","implante","diu","inyeccion"],text:"Hay diferentes métodos y cada uno tiene indicaciones. El personal de salud puede ayudarte a elegir según tus necesidades y antecedentes. La mayoría no protege contra ITS; el condón ayuda a reducir ese riesgo."},
{keys:["miedo","presion","violencia","pareja","consentimiento","oblig"],text:"Nadie debe presionarte. Tus límites importan y el consentimiento debe ser libre y reversible. Habla con una persona adulta de confianza o busca apoyo profesional; si estás en peligro inmediato, contacta servicios de emergencia."},
{keys:["centro","clinica","doctor","salud","ayuda","apoyo"],text:"Puedes acudir a un centro de salud o consultar los sitios oficiales de la Secretaría de Salud. Confirma horarios y servicios antes de acudir. Si es una urgencia, busca atención inmediata."}
];
function sendCustom(){const q=$("#customQuestion").value.trim();if(!q){toast("Escribe una duda general.");return}addMessage(q,"user");const normalized=q.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");const match=customResponses.find(r=>r.keys.some(k=>normalized.includes(k)));addMessage(match?match.text:"Gracias por tu pregunta. Puedo orientar sobre embarazo adolescente, anticoncepción, ITS, consentimiento y redes de apoyo. Elige una categoría del chatbot o consulta a personal de salud para una respuesta adaptada a tu situación. Por privacidad, no compartas datos personales.");$("#customQuestion").value=""}
$("#sendCustom").addEventListener("click",sendCustom);$("#customQuestion").addEventListener("keydown",e=>{if(e.key==="Enter")sendCustom()});
$("#resetChat").addEventListener("click",()=>{chatMessages.innerHTML="";addMessage("Conversación reiniciada. Elige una categoría y una pregunta. No compartas datos personales.");loadQuestions()});loadQuestions();

const quiz=[
{q:"¿Cuál método ayuda a reducir el riesgo de muchas ITS?",opts:["Pastillas anticonceptivas","Condón","Calendario menstrual"],correct:1,why:"El condón reduce el riesgo de muchas ITS y también ayuda a prevenir el embarazo."},
{q:"¿Qué debe hacer una persona si cree que está embarazada?",opts:["Guiarse solo por síntomas","Ignorar la duda","Realizar una prueba y buscar orientación de salud"],correct:2,why:"Una prueba y la orientación de personal de salud ayudan a aclarar la situación."},
{q:"¿Cómo debe ser el consentimiento?",opts:["Libre y reversible","Obligatorio si hay pareja","Se asume sin preguntar"],correct:0,why:"El consentimiento debe ser libre, claro y puede retirarse en cualquier momento."},
{q:"¿Las pastillas anticonceptivas protegen contra ITS?",opts:["Sí, todas","No","Solo si se toman por la noche"],correct:1,why:"Las pastillas ayudan a prevenir el embarazo, pero no protegen contra ITS."},
{q:"¿Qué es lo más adecuado para elegir un método anticonceptivo?",opts:["Elegir por presión de otras personas","Consultar información y orientación profesional","Usar cualquier método sin leer instrucciones"],correct:1,why:"La orientación profesional ayuda a elegir según necesidades, salud y preferencias."}
];let quizIndex=0,score=0,answered=false;
function renderQuiz(){const item=quiz[quizIndex];$("#quizStep").textContent=`PREGUNTA ${quizIndex+1} DE ${quiz.length}`;$("#quizScore").textContent=`Puntaje: ${score}`;$("#progressFill").style.width=`${(quizIndex+1)/quiz.length*100}%`;$("#quizQuestion").textContent=item.q;$("#quizFeedback").textContent="";$("#nextQuiz").disabled=true;$("#nextQuiz").textContent=quizIndex===quiz.length-1?"Ver resultado →":"Siguiente pregunta →";$("#quizOptions").innerHTML="";answered=false;item.opts.forEach((opt,i)=>{const b=document.createElement("button");b.className="quiz-option";b.textContent=opt;b.addEventListener("click",()=>{if(answered)return;answered=true;const correct=i===item.correct;if(correct)score++;$$(".quiz-option").forEach((x,j)=>{x.disabled=true;if(j===item.correct)x.classList.add("correct");else if(j===i)x.classList.add("incorrect")});$("#quizScore").textContent=`Puntaje: ${score}`;$("#quizFeedback").textContent=(correct?"¡Correcto! ":"Puedes repasarlo. ")+item.why;$("#nextQuiz").disabled=false});$("#quizOptions").append(b)})}
$("#nextQuiz").addEventListener("click",()=>{if(!answered)return;if(quizIndex<quiz.length-1){quizIndex++;renderQuiz()}else{$("#quizQuestion").textContent=`Resultado: ${score} de ${quiz.length}`;$("#quizOptions").innerHTML="";$("#quizFeedback").textContent=score>=4?"¡Buen trabajo! Mantén el hábito de consultar fuentes confiables.":"Repasa las secciones de métodos, mitos y chatbot para reforzar lo aprendido." ;$("#nextQuiz").disabled=false;$("#nextQuiz").textContent="Volver a intentarlo ↻";$("#nextQuiz").onclick=()=>{quizIndex=0;score=0;$("#nextQuiz").onclick=null;renderQuiz()}}});renderQuiz();
