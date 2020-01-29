import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';

Template.App_home.onCreated(function () {
    this.subscribe('teste');
});
