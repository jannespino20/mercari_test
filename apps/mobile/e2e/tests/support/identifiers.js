const testId = {
  homeScreen: {
    create: "buttons.add",
    notePanel: {
      seeOptions: "listitem.menu",
      options: {
        favorite: "icon-favorite",
        trash: "icon-trash",
        pin: "icon-pin",
        lock: "icon-lock-unlock"
      },
      status: {
        favorite: "icon-star",
        pin: "icon-pinned",
        lock: "note-locked-icon"
      }
    },
    lockModal: {
      password: "pwd",
      confirmPassword: "pwd_alt",
      confirm: "yes"
    }
  },
  note: {
    create: "buttons.add"
  },
  notebook: {
    create: "buttons.add",
    newNotebookPanel: {
      title: "title",
      description: "description",
      confirm: "Add"
    },
    noteCheckboxes: "listitem.select"
  },
  navigation: {
    menu: "left",
    trash: "Trash",
    notebooks: "Notebooks",
    monographs: "Monographs",
    favorites: "Favorites",
    notes: "Notes",
    reminders: "Reminders",
    tags: "Tags"
  },
  trash: {
    emptyTrash: "buttons.add"
  },
  modal: {
    confirm: "yes"
  }
};

const classes = {
  note: {
    editorTextField: "android.widget.EditText"
  }
};

const accessibilityLabel = {
  notebook: {
    newNotebookPanel: {
      confirm: "Add",
      moveSelectedNotes: "Move selected notes"
    }
  }
};

module.exports = {
  testId,
  classes,
  accessibilityLabel
};
