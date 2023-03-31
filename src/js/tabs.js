const Tabs =()=>{

    const tabs= document.getElemetByClassName('tab');
    const tabsContent= document.getElemetByClassName('tabContent');

    for(i=0;i<tabs.length;i++){
        if(tabs[i].classList.contains("active")){
            let dataTab = tabs[i].getAttribute('data-tab');
            for(j=0;j<tabsContent.length;j++){
                tabsContent[j].classList.remove('active');

                if(tabsContent[j].id == dataTab){
                    tabsContent[j].classList.add('active');
                }
            }
        }
    }

}
export default Tabs;