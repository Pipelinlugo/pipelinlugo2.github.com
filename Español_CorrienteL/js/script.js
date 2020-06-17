   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:' personjaes Principales son: ', options:['Miguel Díaz y Pedro Ruiz',' La parcela','Juan López portillo','Ninguna de las Anteriores'],answer:1},

                          {q:'Quien es el Autor de la obra?',options:['Pedro Ruiz','Dave Gorhl','Juan López portillo','Juan El pedro'],answer:3},

                          {q:'El conflicto de estos personajes se evidencia en:',options:['Cada vez el coronavirus se hace mas presente',' Miguel acusaba a Pedro de haber robado una parte del terreno y junto a esto genero desgracia en las personas para conseguir lo que según él era suyo','16-19 = Bases de datos','Miguel acusaba a Pedro de llevarse toda su fortuna e incinerarla hasta que no uede nada '],answer:2},

                         {q:'Fernando perdono a Pedro de su atroz acto?',options:['Verdadero','Falso','Puede ser... ＞﹏＜','Alargan la cuarentena  (* ￣︿￣)'],answer:2},
                           
                         {q:'Que consigio Miguel?',options:['Todos los terrenos del mundo','Perdio sus territorios',' Todas las Emisoras del momento ',' Contrae coronavirus'],answer:2},

                         {q:'Donde vivian Miguel y Pedro?',options:['Colombia Bogota','Cítala Salvador',' Madre Russia ',' Inglaterra'],answer:2},

                         {q:'Que es el naturalismo?',options:['Movimiento Literario','Novela De suspenso','Tema Literario',' Marca Popular'],answer:1},

                         {q:'Siglo en el que surgio el nNaturalismo',options:['XX','IXI','XIX','XI'],answer:3},

                         {q:'El naturalismo es un movimiento',options:['Literario','Artistico','Filosofico','todas las Anteriores'],answer:4},
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Acabo el quiz";
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="Chulito";
                         	ele.innerHTML="Chulito";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="Equis";
                         	ele.innerHTML="Equis";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



