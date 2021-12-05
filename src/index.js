import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import SoftwareTabs from "./softwareTabs";
import { createData } from "./createData";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <p>
      {}
      <img
        width="100%"
        height="100%"
        src="https://i.postimg.cc/gjVX5PHh/Ninite-top.png"
        alt="Ninite"
      />
      <SoftwareTabs
        software={[
          //web browsers
          createData(0, "Chrome", "Google browser", "64.31"),
          createData(1, "Opera", "Light weight browser", "32.11"),
          createData(2, "Firefox", "Mozilla browser", "64.31"),
          createData(3, "Edge", "Microsoft Browser", "36.11"),
          //file sharing
          createData(
            4,
            "qBittorrent",
            "Bittorrent File Sharing Client",
            "31.21"
          ),
          //developer tools
          createData(5, "Notepad++", "Programmer notepad", "42.11"),
          createData(6, "Eclipse", "IDE", "52.11"),
          createData(7, "Visual Studio Code", "IDE", "62.11"),
          createData(8, "Python x64 3", "Programming Language", "3.11"),
          createData(9, "Python 3", "Programming Language", "3.11"),
          createData(10, "Python", "Programming Language", "2.7"),
          createData(
            11,
            "JDK (AdoptOpenJDK) x64 8",
            "Programming Language",
            "8.2"
          ),
          createData(12, "JDK (AdoptOpenJDK) 8", "Programming Language", "8.2"),
          createData(
            13,
            "JDK (AdoptOpenJDK) x64 11",
            "Programming Language",
            "11.1"
          ),
          createData(
            14,
            "JDK (Amazon Corretto) x64 8",
            "Programming Language",
            "8.2"
          ),
          createData(
            15,
            "JDK (Amazon Corretto) 8",
            "Programming Language",
            "8.2"
          ),
          createData(
            16,
            "JDK (Amazon Corretto) x64 11",
            "Programming Language",
            "11.1"
          ),
          createData(17, "FileZilla", "FTP Client", "5.1"),
          createData(18, "WinSCP", "SCP Client", "6.7"),
          createData(19, "PuTTY", "SSH Client", "2.3"),
          createData(20, "WinMerge", "File Merge tool", "3.4"),
          //messaging
          createData(21, "Zoom", "Video Conferencing", "3.11"),
          createData(22, "Discord", "Audio Chat tool", "4.2"),
          createData(23, "Skype", "Video Conferencing", "8.6"),
          createData(24, "Pidgin", "Mutiple Client Chat tool", "5.3"),
          createData(25, "Thunderbird", "Email Client", "6.44"),
          createData(26, "Trillian", "Mutiple Client Chat tool", "7.5"),
          //media
          createData(27, "iTunes", "Apple Music player Service", "32.2"),
          createData(28, "VLC", "Video Player", "3.5"),
          createData(29, "AIMP", "Music Player", "5.35"),
          createData(30, "foobar2000", "Music Player", "3.3"),
          createData(31, "Winamp", "Music Player", "6.3"),
          createData(32, "MusicBee", "Music Player", "8.2"),
          createData(33, "Audacity", "Audio Editor", "11.1"),
          createData(34, "K-Lite Codecs", "Video Codecs and player", "3.27"),
          createData(35, "GOM", "Video Player", "52.11"),
          createData(36, "Spotify", "Music Player Service", "4.2"),
          createData(37, "CCCP", "Video Codecs and player", "14.23"),
          createData(38, "MediaMonkey", "Music organizer", "1.13"),
          createData(39, "HandBrake", "Video converter", "2.11"),
          //runtimes
          createData(40, "Java (AdoptOpenJDK) x64 8", "Java 8 Runtime", "8.5"),
          createData(41, "Java (AdoptOpenJDK) 8", "Java 8 Runtime", "8.6"),
          createData(
            42,
            "Java (AdoptOpenJDK) x64 11",
            "Java 11 Runtime",
            "11.2"
          ),
          createData(43, ".NET 4.8", "Microsoft .Net Runtime", "4.8"),
          createData(
            44,
            ".NET Desktop Runtime x64 5",
            "Microsoft .Net Runtime",
            "5.3"
          ),
          createData(
            45,
            ".NET Desktop Runtime 5",
            "Microsoft .Net Runtime",
            "5.3"
          ),
          createData(46, "Silverlight", "Silverlight Runtime", "32.5"),
          //utilities
          createData(47, "TeamViewer 15", "Remote Access Tool", "9.12"),
          createData(48, "ImgBurn", "Disk Burner", "11.5"),
          createData(49, "RealVNC Server", "Remote access tool", "3.2"),
          createData(50, "RealVNC Viewer", "Remote access tool", "6.3"),
          createData(51, "TeraCopy", "Better File Copy", "18.8"),
          createData(52, "CDBurnerXP", "CD Burner", "21.1"),
          createData(53, "Revo", "App Uninstall Reverse Ninite", "23.9"),
          createData(54, "Launchy", "Hotkey launcher", "6.23"),
          createData(55, "WinDirStat", "Directory Statistics", "7.6"),
          createData(56, "Glary", "System Utilities", "4.11"),
          createData(57, "InfraRecorder", "Disk Burner", "6.12"),
          createData(58, "Classic Start", "WinXP start for Win 7", "4.6"),
          //imaging
          createData(59, "Krita", "Draw Paint Tool", "2.6"),
          createData(60, "Blender", "3d  Creation sweet", "5.7"),
          createData(61, "Paint.NET", "Draw Paint Tool", "2.3"),
          createData(62, "GIMP", "Image editor", "4.3"),
          createData(63, "IrfanView", "Image viewer", "12.12"),
          createData(64, "XnView", "Image viewer", "7.11"),
          createData(65, "Inkscape", "Vector graphics editor", "8.3"),
          createData(66, "FastStone", "Image viewer", "2.0"),
          createData(67, "Greenshot", "Screenshot tool", "6.9"),
          createData(68, "ShareX", "Screenshot uploader", "7.2"),
          //documents
          createData(69, "Foxit Reader", "PDF Reader", "4.8"),
          createData(70, "LibreOffice", "Office document program set", "1.2"),
          createData(71, "SumatraPDF", "PDF Reader", "7.15"),
          createData(72, "CutePDF", "PDF Reader", "4.5"),
          createData(73, "OpenOffice", "Office document program set", "6.2"),
          //online storage
          createData(74, "Dropbox", "Online and backup tool", "8.2"),
          createData(
            75,
            "Google Backup and Sync",
            "Google Online File Sync and backup tool",
            "32.3"
          ),
          createData(
            76,
            "OneDrive",
            "Microsoft Online File backup tool",
            "6.4"
          ),
          createData(
            77,
            "SugarSync",
            "Online File Sync and backup tool",
            "2.1"
          ),
          //security
          createData(78, "Essentials", "Anti Virus", "9.1"),
          createData(79, "Malwarebytes", "Anti Spyware and tracking", "12.3"),
          createData(80, "Avast", "Anti Virus", "4.8"),
          createData(81, "AVG", "Anti Virus", "6.17"),
          createData(82, "Spybot 2", "Anti Spyware and tracking", "3.4"),
          createData(83, "Avira", "Anti Virus", "8.5"),
          createData(
            84,
            "SUPERAntiSpyware",
            "Anti Spyware and tracking",
            "2.2"
          ),
          //compression
          createData(85, "7-Zip", "Compression tool", "7.12"),
          createData(86, "PeaZip", "Compression tool", "14.3"),
          createData(87, "WinRAR", "The Best Compression tool", "5.14"),
          //other
          createData(88, "Evernote", "Live Document and Audio Backup", "13.2"),
          createData(89, "Google Earth", "Google Atlas tool", "15.5"),
          createData(90, "Steam", "Game library and platform", "14.3"),
          createData(91, "KeePass 2", "Password storage", "7.5"),
          createData(92, "Everything", "Local file search engine", "2.8"),
          createData(93, "NV Access", "Scren reader", "1.2")
        ]}
      />
    </p>
  </StyledEngineProvider>,
  document.querySelector("#root")
);
