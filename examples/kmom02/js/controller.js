function Controller() {
	this.errors = [];
}
Controller.prototype.showDialog = function(title,msg) {
    // display title & message to user in dialog
    var dialog = document.getElementById("dialog");
    dialog.innerHTML = `<h2>${title}</h2><p>${msg}</p>`;
};
Controller.prototype.success = function(msg) {
	this.showDialog( "Success", msg );
};
Controller.prototype.failure = function(err) {
	this.errors.push( err );
	this.showDialog( "Error", err );
};

export default Controller;
