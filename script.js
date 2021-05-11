

function upload()
{
    if(confirm("Please submit the videos to the developer\nA must:\n1. Video must not exceed over 90MB due to GitHub's upload limit\n2. Video must include poster and video.\n3. No inappropiate videos. Curse words are allowed.\n4. The video must not contain racism. \nAny inappropiate content should be reported to the devs.\nPlease submit the video by clicking OK."))
    {
        window.location.replace("mailto:zeanfender11@gmail.com");
    }
    else
    {
        txt = "Cancelled!;"
    }

}
