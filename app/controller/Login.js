Ext.define('ext-app.controller.Login', {
    extend: 'Ext.app.Controller',
    refs: [{ ref: 'form', selector: 'form'} ],
   
    init: function() {

        this.control({
             'app-login button[action=login]': {
                click: this.onLogin
            },
             'app-login textfield': { 
                specialkey: function(field, e) { 
                if(e.getKey() == e.ENTER) { 
                    this.onLogin();
                } 
            } 
        } 
        });
    },

    onLogin: function() {

        var form   = this.getForm();
            form.submit({ 
            url:'php/login.php', 
            method:'POST', 
            success:function(result, request){
               window.location = 'index.php';
            },
            failure:function(form, action){ 
                if(action.failureType == 'server'){ 
                    Ext.Msg.alert('Login Failed!', 'Invalid username or password. <br> Please try again.'); 
                }else{ 
                    Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText); 
                } 
                form.reset(); 
            } 
        }); 

    },

});