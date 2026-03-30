// LOADER
    const loader=document.getElementById('loader'),lpEl=document.getElementById('lp');
    let c=0;
    const ct=setInterval(()=>{c+=Math.floor(Math.random()*10)+5;if(c>=100){c=100;clearInterval(ct)}lpEl.textContent=c+'%'},80);
    window.addEventListener('load',()=>setTimeout(()=>loader.classList.add('hidden'),1800));

// CURSOR
    const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
    document.addEventListener('mousemove',e=>{
      cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
      ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px';
    });
    document.querySelectorAll('a,button,.pc,.fb').forEach(el=>{
      el.addEventListener('mouseenter',()=>document.body.classList.add('ch'));
      el.addEventListener('mouseleave',()=>document.body.classList.remove('ch'));
    });

// HAMBURGER
    const hb=document.getElementById('hb'),mm=document.getElementById('mm');
    hb.addEventListener('click',()=>{
      hb.classList.toggle('open');mm.classList.toggle('open');
      document.body.style.overflow=mm.classList.contains('open')?'hidden':'';
    });
    document.querySelectorAll('.ml').forEach(l=>l.addEventListener('click',()=>{
      hb.classList.remove('open');mm.classList.remove('open');document.body.style.overflow='';
    }));

// NAV SHRINK + BACK TO TOP
    const nb=document.getElementById('nb'),bt=document.getElementById('bt');
    window.addEventListener('scroll',()=>{
      nb.classList.toggle('sc',scrollY>60);
      bt.classList.toggle('visible',scrollY>400);
    });
    bt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// SCROLL REVEAL
    const ro=new IntersectionObserver((entries)=>{
      entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);ro.unobserve(e.target)}});
    },{threshold:.1});
    document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

// PROJECT FILTER
    document.querySelectorAll('.fb').forEach(btn=>{
      btn.addEventListener('click',()=>{
        document.querySelectorAll('.fb').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const f=btn.dataset.filter;
        document.querySelectorAll('.pc').forEach(c=>c.classList.toggle('hidden',f!=='all'&&c.dataset.category!==f));
      });
    });

 // CONTACT FORM
    document.getElementById('cf').addEventListener('submit',e=>{
      e.preventDefault();
      const btn=document.getElementById('sb2');
      btn.textContent='Sending...';btn.disabled=true;
      setTimeout(()=>{
        btn.textContent='Message Sent ✓';
        btn.style.cssText='background:#c8a96e;border-color:#c8a96e;color:#1a1815';
        setTimeout(()=>{btn.textContent='Send Message →';btn.style.cssText='';btn.disabled=false;e.target.reset()},3000);
      },1200);
    });
