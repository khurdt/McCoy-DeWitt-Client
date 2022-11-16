import React, { Component, useRef } from "react";
import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";
import { FolderPlus } from "react-feather";
import { Button } from "react-bootstrap";


class CloudinaryUploadWidget extends Component {
    componentDidMount() {
        this.myWidget();
    }
    myWidget() {
        const cloudName = process.env.REACT_APP_CLOUD_NAME; // replace with your own cloud name
        const uploadPreset = "xeyoxyah"; // replace with your own upload preset

        // Remove the comments from the code below to add
        // additional functionality.
        // Note that these are only a few examples, to see
        // the full list of possible parameters that you
        // can add see:
        //   https://cloudinary.com/documentation/upload_widget_reference

        let myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
                // cropping: true, //add a cropping step
                showAdvancedOptions: true,  //add advanced options (public_id and tag)
                sources: ["local", "url"], // restrict the upload sources to URL and local files
                // multiple: false,  //restrict upload to a single file
                // folder: "user_images", //upload files to the specified folder
                // tags: ["users", "profile"], //add the given tags to the uploaded files
                // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
                // clientAllowedFormats: ["images"], //restrict uploading to image files only
                // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
                // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
                // theme: "purple", //change to a purple theme
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    document
                        .getElementById("uploadedimage")
                        .setAttribute("src", result.info.secure_url);
                }
            }
        );
        myWidget.open();
    }

    render() {
        return (
            <Button onClick={() => this.myWidget()} variant="dark" style={{ display: 'flex', margin: '10px' }}>
                <FolderPlus style={{ color: 'green', cursor: 'pointer', marginRight: '5px' }} />
                <div style={{ marginTop: '3px' }}>Add More</div>
            </Button>
        );
    }
}

export default CloudinaryUploadWidget;
