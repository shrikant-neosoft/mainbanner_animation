

 gsap.registerPlugin(ScrollTrigger);


if($('.mainBanner .animation-mode').hasClass('active')){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.mainBanner',
            scrub: true,
            pin:'.mainBanner',
            
        }
    });

    gsap.to(".animation-mode .slide1",{
        scrollTrigger:{
            trigger:'.mainBanner',
        toggleAction:'play none none none',
        },
        height:$('.animation-mode .slide1 .mainBanner--content-title').height(),
        duration:0.5}
    );

    //tl.to(".animation-mode .slide1",{height:$('.animation-mode .slide1 .mainBanner--content-title').height(),duration:2});
    tl.to(".animation-mode .slide3",{height:$('.animation-mode .slide3 .mainBanner--content-para').height()+48,duration:100});

    tl.to(".animation-mode .slide2 .mainBanner--content-img",{opacity:1,duration:2});
    tl.from(".animation-mode .slide2 [data-layer-id='fbc90cfb-fc35-40ef-896f-20945b644ab8']",{rotation:0});
    
    // car icon
    tl.from(".animation-mode .slide2 [data-layer-id='8d4e331d-23ed-42ce-8337-10cf7fed6680']",{opacity:0,duration:10});
    tl.to(".animation-mode .slide2 [data-layer-id='8d4e331d-23ed-42ce-8337-10cf7fed6680']",{opacity:1,duration:10});
    
    // net icon
    tl.from(".animation-mode .slide2 [data-layer-id='91a9ff9a-0197-49bc-b6c3-f964ff0d0a8c']",{opacity:0,duration:25});
    tl.to(".animation-mode .slide2 [data-layer-id='91a9ff9a-0197-49bc-b6c3-f964ff0d0a8c']",{opacity:1,duration:25});
    
    // user icon
    tl.from(".animation-mode .slide2 [data-layer-id='644d7dde-58e0-4894-a0ca-790665804b1c']",{opacity:0,duration:25}, "-=50");
    tl.to(".animation-mode .slide2 [data-layer-id='644d7dde-58e0-4894-a0ca-790665804b1c']",{opacity:1,duration:25});
    

    // circle ball
    tl.to(".animation-mode .slide2 [data-layer-id='fbc90cfb-fc35-40ef-896f-20945b644ab8']",{rotation:180,duration:50},"-=75");
    tl.to(".animation-mode .slide2 [data-layer-id='92e8cafc-526b-47d4-a396-5e5e299f66c3']",{rotation:180,duration:50},"-=75");
    tl.to(".animation-mode .slide2 [data-layer-id='fbc90cfb-fc35-40ef-896f-20945b644ab8']",{rotation:360,duration:50},'-=25');
    tl.to(".animation-mode .slide2 [data-layer-id='e5ec80e9-0a2a-44b5-83e1-51dc738e0283']",{rotation:180,duration:50},"-=50");
    
    tl.from(".animation-mode .slide2 [data-layer-id='ae06a8b7-6b19-4765-8941-20cd808f3146']",{left:"200px",top:"60px",duration:25},"-=100");
    tl.to(".animation-mode .slide2 [data-layer-id='ae06a8b7-6b19-4765-8941-20cd808f3146']",{left:"100px",top:"235px",duration:25});
    
    tl.from(".animation-mode .slide2 [data-layer-id='6035a33a-5851-4c56-92ae-2978962324df']",{height:"10px",duration:25},"-=125");
    tl.to(".animation-mode .slide2 [data-layer-id='6035a33a-5851-4c56-92ae-2978962324df']",{height:"235px",duration:25});
    
    tl.from(".animation-mode .slide2  [data-layer-id='b4b88b79-c76c-445c-96a4-15c4580150c5']",{left:"115px",top:"263px",duration:50},"-=125");
    //tl.to(".animation-mode .slide2  [data-layer-id='b4b88b79-c76c-445c-96a4-15c4580150c5']",{left:"100px",top:"235px",duration:50});
    
    tl.from(".animation-mode .slide2  [data-layer-id='3c78ce59-d7d8-424c-9eaa-7f7ca9ddce6d']",{left:"-140px",duration:50},"-=125");
    tl.to(".animation-mode .slide2  [data-layer-id='3c78ce59-d7d8-424c-9eaa-7f7ca9ddce6d']",{left:"80px",duration:50});
    
    //tl.from(".animation-mode .slide2  [data-layer-id='05d94d2a-e926-4fb7-bafa-1d88b7d3e67b']",{left:"230px",top:"80px",duration:50},"-=150");
    tl.to(".animation-mode .slide2  [data-layer-id='05d94d2a-e926-4fb7-bafa-1d88b7d3e67b']",{left:"226px",top:"74px",duration:50},"-=150");
    
    tl.from(".animation-mode .slide2  [data-layer-id='8938ab16-f0a7-40c8-a543-31bc2d6b55c9']",{scaleY:0.2,duration:50},"-=150");
    tl.to(".animation-mode .slide2  [data-layer-id='8938ab16-f0a7-40c8-a543-31bc2d6b55c9']",{scaleY:1,duration:25},);
    
    tl.to(".animation-mode .slide2  [data-layer-id='6fab6b57-d5e8-4d0b-ab79-2f7a66f5c537']",{opacity:0,duration:5},'-=50');
    tl.to(".animation-mode .slide2  [data-layer-id='0d1f35d4-59a7-402b-909b-8810f86579d8']",{opacity:1,duration:5},'-=50');
    tl.to(".animation-mode .slide2  [data-layer-id='ed6671e8-8ac1-468b-8943-dd85d2ae2b7b']",{opacity:0,transform:'translate(-50%,0px) scale(2)',duration:50},'-=25');

    

    tl.from(".animation-mode .slide3",{scaleX:0,scaleY:0,opacity:0,duration:10});
    tl.to(".animation-mode .slide3",{scaleX:1,scaleY:1,opacity:1,duration:100});
    tl.to(".animation-mode .slide3 .mainBanner--content-para",{opacity:1,duration:100},'-=50');


    let t2 = gsap.timeline({
        scrollTrigger:{
            trigger:'.mainBanner',
            scrub: true,
            start:'top top'
        }
    });
    t2.from(".mainBanner .animation-mode .img-bg",{transform:'translateY(0%)',duration:20});
    t2.to(".mainBanner .animation-mode .img-bg",{transform:'translateY(20%)',opacity:0.3,duration:100});

}else{
    gsap.to(".normal-mode .slide1",{
        scrollTrigger:{
            trigger:'.mainBanner',
           toggleAction:'play none none none',
        },
        height: $('.normal-mode .mainBanner--content-title').height()+'px',
        duration:0.3}
   );
    gsap.to(".normal-mode .slide3",{
        scrollTrigger:{
            trigger:'.mainBanner',
           toggleAction:'play none none none',
        },
        height: ($('.normal-mode .mainBanner--content-para').height()+48)+'px',
        duration:0.3}
   );


   let tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.mainBanner',
            scrub: true,
            start:'top top'
        }
    });

    tl.from(".mainBanner .normal-mode .img-bg",{transform:'translateY(0%)',duration:20});
    tl.to(".mainBanner .normal-mode .img-bg",{transform:'translateY(20%)',opacity:0.3,duration:100});

}


console.log($('.normal-mode .mainBanner--content-title').height());