import React, { Component } from "react";
import { FolderPlus } from "react-feather";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import uuid from 'react-uuid';


class CloudinaryUploadWidget extends Component {
    constructor() {
        super();
        this.state = {
            widgetOpen: false
        };
    }
    componentDidMount() {
        if (this.state.widgetOpen === false) {
            this.setState({ widgetOpen: true });
            this.myWidget();
        }
    }
    myWidget() {
        const cloudName = process.env.REACT_APP_CLOUD_NAME; // replace with your own cloud name
        // const cloudName = '';
        const uploadPreset = "xeyoxyah"; // replace with your own upload preset
        const file_id = uuid();
        // this.props.updateFiles(file_id);

        // Remove the comments from the code below to add
        // additional functionality.
        // Note that these are only a few examples, to see
        // the full list of possible parameters that you
        // can add see:
        //   https://cloudinary.com/documentation/upload_widget_reference

        let myWidget = window.cloudinary.createUploadWidget(
            {
                prepareUploadParams: function (cb, params) {
                    cb({ public_id: file_id });
                    if (this.props.add === 'document') {
                        cb({ resource_type: 'raw' })
                        cb({ raw_convert: 'aspose' })
                    }
                },
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                // cropping: true, //add a cropping step
                // showAdvancedOptions: true,  //add advanced options (public_id and tag)
                sources: ["local", "url"], // restrict the upload sources to URL and local files
                // multiple: false,  //restrict upload to a single file
                folder: this.props.project_id, //upload files to the specified folder
                // tags: ["users", "profile"], //add the given tags to the uploaded files
                // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
                // clientAllowedFormats: ["png,jpg,jpeg"], //restrict uploading to image files only
                // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
                maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
                // theme: "purple", //change to a purple theme
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    this.props.handleUpdateFiles(result.info.public_id);
                    document.getElementById("uploadedimage").setAttribute("src", result.info.secure_url);
                }
            }
        );
        myWidget.open();
    }

    render() {
        return (
            <></>
        );
    }
}

export default CloudinaryUploadWidget;
