import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    bottom: theme.spacing(5)
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

const Editor = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CKEditor
          editor={ClassicEditor}
          data="<h1>Hello from editor!</h1>"
          onInit={editor => {
            console.log("Editor state", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur!", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus", editor);
          }}
        />
      </main>
    </div>
  );
};

export default Editor;
