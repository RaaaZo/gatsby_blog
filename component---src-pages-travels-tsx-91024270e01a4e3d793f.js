(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"890N":function(e,t,i){"use strict";i.r(t);var r=i("q1tI"),n=i.n(r),a=i("kOA+"),s=i.n(a),o=i("pYpg"),l=i.n(o),c=i("y3Dv"),u=i.n(c),p=i("Wbzz"),h=i("HpC4"),d=function(){var e=Object(p.useStaticQuery)("4182269125").articles;return n.a.createElement(n.a.Fragment,null,e.nodes.map((function(e){return n.a.createElement(h.a,{article:e,key:e.id})})))},_=i("ZMKu"),g=i("gxKu");t.default=function(){return n.a.createElement("div",{className:u.a.all_articles},n.a.createElement(_.a.h1,{initial:"hidden",animate:"show",variants:g.b},"Travel Articles"),n.a.createElement(_.a.div,{initial:"hidden",animate:"show",variants:g.a,className:u.a.all_articles__types},n.a.createElement(s.a,{swipe:!0,to:"/articles"},"All Articles"),n.a.createElement(s.a,{swipe:!0,to:"/photography"},"Photography")),n.a.createElement("div",{className:l.a.articles_wrapper},n.a.createElement(d,null)))}},HpC4:function(e,t,i){"use strict";var r=i("q1tI"),n=i.n(r),a=i("kOA+"),s=i.n(a),o=i("VlHs"),l=i.n(o),c=i("9eSz"),u=i.n(c);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var h=new Map,d=new Map,_=0;function g(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(i=e.root)?(d.has(i)||(_+=1,d.set(i,_.toString())),d.get(i)):"0":e[t]);var i})).toString()}function f(e,t,i){if(void 0===i&&(i={}),!e)return function(){};var r=function(e){var t=g(e),i=h.get(t);if(!i){var r,n=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var i,a=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(i=n.get(t.target))||i.forEach((function(e){e(a,t)}))}))}),e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:n},h.set(t,i)}return i}(i),n=r.id,a=r.observer,s=r.elements,o=s.get(e)||[];return s.has(e)||s.set(e,o),o.push(t),a.observe(e),function(){o.splice(o.indexOf(t),1),0===o.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),h.delete(n))}}function v(e){return"function"!=typeof e.children}var b=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,t){e&&i.props.triggerOnce&&i.unobserve(),v(i.props)||i.setState({inView:e,entry:t}),i.props.onChange&&i.props.onChange(e,t)},i.state={inView:!!t.initialInView,entry:void 0},i}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var a=n.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,i=e.root,r=e.rootMargin,n=e.trackVisibility,a=e.delay;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:i,rootMargin:r,trackVisibility:n,delay:a})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!v(this.props)){var e=this.state,t=e.inView,i=e.entry;return this.props.children({inView:t,entry:i,ref:this.handleNode})}var n=this.props,a=n.children,s=n.as,o=n.tag,l=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(n,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(s||o||"div",p({ref:this.handleNode},l),a)},n}(r.Component);b.displayName="InView",b.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var m=i("ZMKu"),y=i("gxKu");t.a=function(e){var t=e.article,i=t.description,a=t.image,o=t.slug,c=t.title,p=t.publishedDate,h=t.author,d=Object(m.b)(),_=function(e){var t=void 0===e?{}:e,i=t.threshold,n=t.delay,a=t.trackVisibility,s=t.rootMargin,o=t.root,l=t.triggerOnce,c=t.skip,u=t.initialInView,p=Object(r.useRef)(),h=Object(r.useState)({inView:!!u}),d=h[0],_=h[1],g=Object(r.useCallback)((function(e){void 0!==p.current&&(p.current(),p.current=void 0),c||e&&(p.current=f(e,(function(e,t){_({inView:e,entry:t}),t.isIntersecting&&l&&p.current&&(p.current(),p.current=void 0)}),{root:o,rootMargin:s,threshold:i,trackVisibility:a,delay:n}))}),[Array.isArray(i)?i.toString():i,o,s,l,c,a,n]);Object(r.useEffect)((function(){p.current||!d.entry||l||c||_({inView:!!u})}));var v=[g,d.inView,d.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}({triggerOnce:!0,threshold:.1}),g=_[0];return _[1]&&d.start("show"),n.a.createElement(m.a.div,{variants:y.a,initial:"hidden",animate:d,ref:g,className:l.a.single_article},n.a.createElement(u.a,{style:{width:"100%",height:300,marginBottom:"2rem"},fluid:a.fluid}),n.a.createElement("h3",{className:l.a.single_article__title},c),n.a.createElement("h6",{className:l.a.single_article__author},"by ",h," on ",p),n.a.createElement("p",{className:l.a.single_article__description},i),n.a.createElement(s.a,{swipe:!0,to:"/articles/"+o},n.a.createElement("button",{className:l.a.single_article__button},"Read More")))}},VlHs:function(e,t,i){e.exports={single_article:"single_article-module--single_article--17RC_",gatsbyImageWrapper:"single_article-module--gatsby-image-wrapper--155uT",single_article__title:"single_article-module--single_article__title--2Rq5E",single_article__author:"single_article-module--single_article__author--17UOs",single_article__description:"single_article-module--single_article__description--EkVqu",single_article__button:"single_article-module--single_article__button--Sfjnf"}},pYpg:function(e,t,i){e.exports={articles_list:"article_list-module--articles_list--1Pm35",articles_wrapper:"article_list-module--articles_wrapper--2JPY9"}},y3Dv:function(e,t,i){e.exports={all_articles:"all_articles-module--all_articles--2Ixdr",all_articles__types:"all_articles-module--all_articles__types--aE-WE"}}}]);
//# sourceMappingURL=component---src-pages-travels-tsx-91024270e01a4e3d793f.js.map