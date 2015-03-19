'use strict';

function Mail(folder, from, to, subject, date) {
    var self = this;
    self.folder = folder;
    self.from = from;
    self.to = to;
    self.subject = subject;
    self.date = date;
}

// Class to represent a row in the seat reservations grid
function WebmailViewModel() {
    // Data
    var self = this;

    self.data = [
        new Mail('Sent', 'me', 'you', 'some message sent', new Date() ),
        new Mail('Inbox', 'you', 'me', 'regular mail', new Date() ),
        new Mail('Inbox', 'you', 'me', 'default mail', new Date() ),
        new Mail('Archive', 'me', 'you', 'some old message', new Date() ),
        new Mail('Archive', 'me', 'you', 'another old message', new Date() ),
        new Mail('Spam', 'me', 'you', 'some spam', new Date() ),
        new Mail('Spam', 'me', 'you', 'more spam', new Date() ),
        new Mail('Spam', 'me', 'you', 'Qko spam', new Date() )];

    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();
    self.chosenFolderData = ko.observableArray([new Mail('Spam', 'me', 'you', 'Qko spam', new Date() )]);

    // Behaviours
    self.goToFolder = function(folder) {
        self.chosenFolderId(folder);
        var selectedMails = self.data.filter(function filterByFolder(mail) {
            return mail.folder == folder;
        });

        /*
        for (var selectedMail in selectedMails) {
            self.chosenFolderData.push(selectedMails[selectedMail]);
        }
        */

        self.chosenFolderData.removeAll();
        for (var selectedMail in selectedMails) {
            self.chosenFolderData.push(selectedMails[selectedMail]);
        }

        console.log(self.chosenFolderData());

    };

    // Make Inbox Default
    // self.goToFolder('Inbox');
}

ko.applyBindings(new WebmailViewModel());

/**
 * Created by Radi on 3/19/2015.
 */
 
