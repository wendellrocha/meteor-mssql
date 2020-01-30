// All links-related publications

import { Meteor } from 'meteor/meteor';

Meteor.publish('teste', function () {
  var subscription = this;
  new sql.Request().query('select * from Inventory', (err, result) => {
    if (err) {
      console.log(err);
    }

    let doc = result;

    _.each(doc.recordset, function (item) {
      subscription.added('Teste', item.id, item);
    });

    subscription.ready();
  });
});
