class Tab {
  constructor(tab) {
    const tabContent =  document.querySelector(`.tab-content[data-tab='${tab.dataset.tab}']`);
    this.tabContent = new TabContent(tabContent);
    tab.addEventListener('click', () => this.onTabClick());
  }

  onTabClick() {
    this.tabContent.toggleContent();
  }
}

class TabContent {
  constructor(content) {
    this.tabContent = content;
    this.allTabsContent = document.querySelectorAll('.tab-content');
  }

  toggleContent() {
    this.allTabsContent.forEach(function(content) {
      content.classList.remove('show-content');
    });

    this.tabContent.classList.add('show-content');
  }
}


// Start Here!
const allTabs = document.querySelectorAll('.tab');

allTabs.forEach(tab => new Tab(tab));
