# Knockout Slickgrid Binding

Simple [SlickGrid](https://github.com/mleibman/SlickGrid/) integration for [knockout](http://knockoutjs.com/).



## How to Use

Script

```js
function ViewModel()
{
    this.gridConfig = {
        columns: [{
            id: 'username',
            name: 'Username',
            field: 'username',
        }, {
            id: 'email',
            name: 'E-Mail',
            field: 'email',
        }],
        options: {
            forceFitColumns: true,
            enableColumnReorder: false,
            syncColumnCellResize: true,
        },
        afterInit: function(grid) {
            // register handlers, etc..
        },
        beforeDestroy: function(grid) {
            // cleanup
        },
    };

    this.users = ko.observable([{
        username: 'User 1',
        email: 'user1@host.de',
    }, {
        username: 'User 2',
        email: 'user2@host.de',
    }]);
}

$(function() {
    var vm = new ViewModel();
    ko.applyBindings(vm);
});
```

HTML

```html
<div class="list" data-bind="slickgrid: users, slickgridConfig: gridConfig"></div>
```
