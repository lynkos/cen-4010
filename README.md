# Home Maintenance Tracker
> Create maintenance items and set reminders for consumables such as AC filters and even AC drain flushing. That baseboard repainting job your wifey told you to finish 3 months ago and it's still untouched can be set up as a reminder, with the consumables you need to complete it, such as painting tape, what kind of paint, wood putty, etc. Provider webpage can also be integrated for cart creation and also some search logic can be created on the app based on keywords like "Gloss", "Semi-gloss" or "tape", to narrow down the search. A map of the house can be created based on pre-set layouts and filler rooms that can be added to said layouts to create one that fits the user's house. Visually, items that require normal maintenance and consumables purchased, such as the aforementioned AC filters or even weed killer for the yard can be represented within the graphical house layout and color-coded for how close that maintenance or replacement is. More details can be added as found. 

## Requirements
> [!TIP]
> Refer to [this issue](https://github.com/lynkos/cen-4010/issues/1) for further details
- [x] [IntelliJ IDEA](https://www.jetbrains.com/community/education/#students)
- [x] [Oracle OpenJDK 22](https://jdk.java.net/22) (i.e. Java)
- [x] [JavaFX 22](https://jdk.java.net/javafx22)
- [x] [Scene Builder](https://gluonhq.com/products/scene-builder)

## Installation
> [!IMPORTANT]
> Do not do all 3 methods, only **choose 1**!
> Otherwise, you'll end up with 3 copies of the same code!

1. <a href="#opt1">IntelliJ IDEA + URL</a>
2. <a href="#opt2">IntelliJ IDEA + GitHub</a>
3. <a href="#opt3">Command Line</a> (i.e. CLI)

**TL;DR Feel free to choose your preferred method of cloning (i.e. only 1 of the 3 options)**

<h3 id="opt1">OPTION 1: IntelliJ IDEA + Repository URL</h3>
<details open>
    <summary>1. Open IntelliJ IDEA, then click "Get from VCS" (in Projects tab)</summary>
    <img src="https://github.com/user-attachments/assets/49dc4e31-0eaa-4bab-911c-393a1d086b92">
</details>

<details open>
    <summary>2. Input repo URL (i.e. <code>https://github.com/lynkos/cen-4010</code>) in "URL", optionally choose destination (i.e. directory that'll contain the repo; defaults to <code>$HOME/IdeaProjects/cen-4010</code>), then click "Clone"</summary>
    <img src="https://github.com/user-attachments/assets/67d96526-a85c-4bcf-9580-0be075e7ec04">
</details>

<h3 id="opt2">OPTION 2: IntelliJ IDEA + GitHub</h3>
<details open>
    <summary>1. Open IntelliJ IDEA, then click "Get from VCS" (in Projects tab)</summary>
    <img src="https://github.com/user-attachments/assets/49dc4e31-0eaa-4bab-911c-393a1d086b92">
</details>

<details open>
    <summary>2. Click "Log In via GitHub..."</summary>
    <img src="https://github.com/user-attachments/assets/4ae94505-bc27-4d5b-b6c1-c8c3e9ed93f6">
</details>

<details open>
    <summary>3. Once redirected to this page, click "Authorize in GitHub"</summary>
    <img src="https://github.com/user-attachments/assets/8bbe12af-4ba3-44ff-ab9d-f84e83dc4954">
</details>

<details open>
    <summary>4. Once successfully authorized, close the page and return to IntelliJ IDEA</summary>
    <img src="https://github.com/user-attachments/assets/722670fd-c191-4eb8-8ec4-dc2e78c37d76">
</details>

<details open>
    <summary>5. Select project repo (i.e. <a target="_blank" href="https://github.com/lynkos/cen-4010"><code>cen-4010</code></a>), optionally choose destination (i.e. directory that'll contain repo; defaults to <code>$HOME/IdeaProjects/cen-4010</code>), then click "Clone"</summary>
    <img src="https://github.com/user-attachments/assets/bb8d91bd-3a53-4a40-b64f-0009a4ce52a4">
</details>

<h3 id="opt3">OPTION 3: Command Line</h3>

1. Enter the directory you want repo to be cloned in
    * POSIX
    ```sh
    cd ~/path/to/directory
    ```
    * Windows
    ```sh
    cd C:\Users\user\path\to\directory
    ```

4. Clone repo
```sh
git clone https://github.com/lynkos/cen-4010.git
```

## Usage
WIP

## References
- [SDKs: IntelliJ IDEA](https://www.jetbrains.com/help/idea/sdk.html)
- [Git: IntelliJ IDEA](https://www.jetbrains.com/help/idea/using-git-integration.html)
- [How to select the JDK (i.e. Java SDK) version IntelliJ IDEA will run under](https://intellij-support.jetbrains.com/hc/en-us/articles/206544879-Selecting-the-JDK-version-the-IDE-will-run-under)
