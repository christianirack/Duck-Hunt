import React, { Component } from 'react';
import $ from 'jquery';
var path = require('path');
import screenPng from './assets/screen.png';
/* Inicialización de variables y audios */
var patos = ['pato1', 'pato2', 'pato3', 'pato4'];
var globalX = 0;
var globalY = 0;
var score = 0;
var add = 10;
var movX = 0;
var movXtime;
var movY = 0;
var movYtime;
//var malo1Time;
//var malo1Vidas = 4;
//var malo2Vidas = 4;
//var malo2Time;
//var malo3Vidas = 4;
//var malo3Time;
var puntos = 50;
var audioMuere;
audioMuere = new Audio('assets/audio-muere.mp3');
var audioGana;
audioGana = new Audio('assets/audio-ganar.mp3');

class App extends Component {
estableceXglobal(e){
  globalX = e;
  window.actualizarX(e);
}
estableceYglobal(e){
  globalY = e;
  window.actualizarY(e);
}
componentDidMount() {
          var that = this;
            $(function(){
              if(mUser>0){
                //console.log('Es móvil');
                //alert('es movil');
                $('main').hide();
              }  
          })
            window.disparar = function(){
              that.colision();
            }

            window.matarTiempo = function(){
                clearInterval(movXtime);
                clearInterval(movYtime);
            }
            window.moverCelIzq = function(){
               
                movXtime = setInterval(function(){
                             movX+=10;
                            globalX = movX - (add);
                            that.estableceXglobal(globalX);    

                }, 20);
            }
            window.moverCelDer = function(){
                movXtime = setInterval(function(){
                            movX-=10;
                            globalX = movX - (add);
                            that.estableceXglobal(globalX);
                },20);
            }
          window.moverCelArriba = function(){
                movYtime = setInterval(function(){
                            movY-=10;
                            globalY = movY - (add);
                            that.estableceYglobal(globalY);
                },20);
            }
            window.moverCelAbajo = function(){
                movYtime = setInterval(function(){
                            movY+=10;
                            globalY = movY - (add);
                            that.estableceYglobal(globalY);
                },20);
            }

            window.moverXReact = function(e){
                $("#trigger").css({ left: e });
            }
            window.moverYReact = function(e){
                $("#trigger").css({ top: e });
            }
            var audioIntro = new Audio('assets/audio-intro.mp3');
            audioIntro.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);
            audioIntro.play();
            $('#splashpage').on('click', function(e) {
                /*
                $('#splashpage').hide();
                $('#niveles').show();
                */
                $('#niveles').hide();
                $('#duckHunt').show();
                audioIntro.pause();
            });
            $('#seleccionNivel').on('click', function(e) {
                $('#niveles').hide();
                $('#duckHunt').show();
            });


            $('#ctrlIzq').on('touchstart', function(e){
                e.preventDefault();
                var touch = e.touches[0];
                  if(touch){
                    // Do some stuff
                   window.moverCelIzq();
                  }
                  else {
                    // Do some other stuff
                  }
            });
            $('#ctrlDer').on('touchstart', function(e){
             
                e.preventDefault();
                var touch = e.touches[0];
                  if(touch){
                    // Do some stuff
                   window.moverCelDer();
                  }
                  else {
                    // Do some other stuff
                  }

            });
            $('#ctrlArriba').on('touchstart', function(e){
                e.preventDefault();
                var touch = e.touches[0];
                  if(touch){
                    // Do some stuff
                   window.moverCelArriba();
                  }
                  else {
                    // Do some other stuff
                  }

            });
             $('#ctrlAbajo').on('touchstart', function(e){
                e.preventDefault();
                var touch = e.touches[0];
                  if(touch){
                    // Do some stuff
                   window.moverCelAbajo();
                  }
                  else {
                    // Do some other stuff
                  }

            });
             $('#ctrlB').on('touchstart', function(e){
                e.preventDefault();
                var touch = e.touches[0];
                  if(touch){
                    // Do some stuff
                   window.dispararPato();
                  }
                  else {
                    // Do some other stuff
                  }

            })

              $('#ctrlIzq,#ctrlDer,#ctrlArriba,#ctrlAbajo,#ctrlA,#ctrlB').on('touchend', function(e){
                e.preventDefault();
                window.matarTiempo();

             });
            /* Alinear trigger */
            /*
            $('#app-js').mousemove(function(event) {
                var realX = event.pageX-($('#app-js').position().left);
                var realY = event.pageY-($('#app-js').position().top);
                globalX = realX - (add);
                globalY = realY - (add);
                 $("#trigger").css({ left: globalX, top: globalY });
                //console.log(realX+" - "+realY);

            }).click(function() {
                that.colision();
            });
            */
            /* Cargar malos */
            /*
            setTimeout(function(){ 
                $("#malo1").css('visibility','visible');
                 malo1Time = setInterval(function(){
                  that.setState({score:that.state.score-1});
                 }, 50);

               }, 1000);

              setTimeout(function(){ 
               $("#malo2").css('visibility','visible');
                malo2Time = setInterval(function(){
                  that.setState({score:that.state.score-10});
                 }, 50);
               }, 2000);

              setTimeout(function(){ 
                $("#malo3").css('visibility','visible');
                malo3Time = setInterval(function(){
                  that.setState({score:that.state.score-20});
                 }, 50);
               }, 3000);
               */

        }


    _initialize(data) {
     // var {users, name} = data;
      //this.setState({users, user: name});
  }
    /* Matar patos y enemigos, actualizar el score */
    matar(patoObj, pato) {
            var that = this;
            this.setState({ score: this.state.score + puntos });
            patoObj.css({ left: patoObj.position().left, top: patoObj.position().top });
            patoObj.removeClass('pato' + (Number(pato) + 1) + 'Anim');
            patoObj.css({
                '-webkit-transform': 'scaleY(-1)',
                'transform': 'scaleY(-1)'
            });
            patoObj.animate({
                opacity: 0.25,
                top: "+=250"
            }, 800, function() {
                $('#pato' + (Number(pato) + 1)).remove();
                $('.patos').prepend('<div id="pato' + (Number(pato) + 1) + '" class="pato' + (Number(pato) + 1) + 'Anim"></div>');
                that.ganarAudio();
                // $("#malo2").css({button:0});
            });
            $("#malo2").stop(true, true).animate({
                bottom: "0px"
            }, 800, function() {
                $("#malo2").delay(800).animate({ bottom: "-300px" });
            });
            window.enviar();

        }
        /* Detectar colisiones entre patos y pistola */
    colision() {

        var that = this;
        globalX=$("#trigger").position().left;
        globalY=$("#trigger").position().top;
        //alert( globalX);
        //globalX = $("#trigger").position().left;
        //globalY = $("#trigger").position().top;
            for (var pato in patos) {
                if (pato) {
                    var patoObj = $('#' + patos[pato]);
                    //var trigger = $('#trigger');
                    var rangoX = [patoObj.position().left, patoObj.position().left + patoObj.width()];
                    var rangoY = [patoObj.position().top, patoObj.position().top + patoObj.height()];
                    var triggerX = [globalX, globalX + 70];
                    var triggerY = [globalY, globalY + 70];
                    //var colisionar = 0;
                    /* Localizar contacto en X */
                    var encontradoX = false;

                    for (var buscarX = triggerX[0]; buscarX < triggerX[1]; buscarX++) {
                        for (var buscarX2 = rangoX[0]; buscarX2 < rangoX[1]; buscarX2++) {
                            if (Math.round(buscarX) === Math.round(buscarX2)) {
                                ////console.log("bingo X");
                                encontradoX = true;
                                break;
                            }
                        }
                        if (encontradoX) {
                            break;
                        }
                    };
                    /* Localizar contacto en X */
                    if (encontradoX) {
                        var encontradoY = false;
                        for (var buscarY = triggerY[0]; buscarY < triggerY[1]; buscarY++) {
                            for (var buscarY2 = rangoY[0]; buscarY2 < rangoY[1]; buscarY2++) {
                                if (Math.round(buscarY) === Math.round(buscarY2)) {
                                    //console.info("Win : " + patoObj.attr('id'));
                                    encontradoY = true;
                                    that.muereAudio();
                                    /* Funciones de personajes extras */
                                    /*
                                     if(String(patoObj.attr('id'))==='malo1'){
                                      if(malo1Vidas){
                                        malo1Vidas--;
                                      }else{
                                        clearInterval(malo1Time);
                                        that.matar(patoObj,pato);
                                      }
                                     }else if(String(patoObj.attr('id'))==='malo2'){
                                       if(malo2Vidas){
                                        malo2Vidas--;
                                      }else{
                                        clearInterval(malo2Time);
                                        that.matar(patoObj,pato);
                                      }

                                     }else if(String(patoObj.attr('id'))==='malo3'){
                                       if(malo3Vidas){
                                        malo3Vidas--;
                                      }else{
                                        clearInterval(malo3Time);
                                        that.matar(patoObj,pato);
                                      }
                                     }else{
                                      that.matar(patoObj,pato);

                                     }
                                      */
                                    that.matar(patoObj, pato);

                                    break;
                                }
                            }
                            if (encontradoY) {
                                break;
                            }
                        };
                    }
                }
                /* Comment */
            }
        }
        /* Estados iniciales */
    constructor(props) {
            super(props);
            this.state = {
                disparo: false,
                score: score
            };
        }
        /* Disparar audios */
    muereAudio() {
        audioMuere.currentTime = 0;
        audioMuere.play();
    }
    ganarAudio() {
            audioGana.currentTime = 0;
            audioGana.play();
    }
        /* Establecer eventos al cargar, botones y posición de la pistola */
        //{this.function.bind(this)}
    render() {
        return ( 
            <div id="app-js">
                <div id="splashpage"><img alt="splash"src={ screenPng } />
                <div id="entrar">Entrar</div>
            </div> 
            <div id="niveles"> Selector de nivel <div id="seleccionNivel"> Primer nivel </div></div>
            <div id="duckHunt">©
            <div id="trigger"> </div> <div id="cieloAzul"> </div> <div id="pasto">
            <div id="ducksScore"> </div> <div id="globalScore"
            className="fuente1"> { this.state.score } </div> </div> < div className="patos">
            <div id="malo1"> </div> <div id="malo2"> </div> <div id="malo3"> </div> <div id="pato1"
            className="pato1Anim"> </div> <div id="pato2"
            className="pato2Anim"> </div> <div id="pato3"
            className="pato3Anim"> </div> <div id="pato4"
            className="pato4Anim"> </div> </div> </div> <div id="arma"> </div> 
            </div>
        );
    }
}
export default App;
