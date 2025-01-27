# Introductoin to Linux

### Philosophy

| Principle                                                   | Description                                                                                                                                                    |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Everything is a file                                        | All configuration files for the various services running on the Linux operating system are stored in one or more text files.                                   |
| Small, single-purpose programs                              | Linux offers many different tools that we will work with, which can be combined to work together.                                                              |
| Ability to chain programs together to perform complex tasks | The integration and combination of different tools enable us to carry out many large and complex tasks, such as processing or filtering specific data results. |
| Avoid captive user interfaces                               | Linux is designed to work mainly with the shell (or terminal), which gives the user greater control over the operating system.                                 |
| Configuration data stored in a text file                    | An example of such a file is the /etc/passwd file, which stores all users registered on the system.                                                            |

### Components

| Component       | Description|
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bootloader      | A piece of code that runs to guide the booting process to start the operating system. Parrot Linux uses the GRUB Bootloader.                                                                                                                                                                                                                    |
| OS Kernel       | The kernel is the main component of an operating system. It manages the resources for system's I/O devices at the hardware level.                                                                                                                                                                                                               |
| Daemons         | Background services are called "daemons" in Linux. Their purpose is to ensure that key functions such as scheduling, printing, and multimedia are working correctly. These small programs load after we booted or log into the computer.                                                                                                        |
| OS Shell        | The operating system shell or the command language interpreter (also known as the command line) is the interface between the OS and the user. This interface allows the user to tell the OS what to do. The most commonly used shells are Bash, Tcsh/Csh, Ksh, Zsh, and Fish.                                                                   |
| Graphics server | This provides a graphical sub-system (server) called "X" or "X-server" that allows graphical programs to run locally or remotely on the X-windowing system.                                                                                                                                                                                     |
| Window Manager  | Also known as a graphical user interface (GUI). There are many options, including GNOME, KDE, MATE, Unity, and Cinnamon. A desktop environment usually has several applications, including file and web browsers. These allow the user to access and manage the essential and frequently accessed features and services of an operating system. |
| Utilities       | Applications or utilities are programs that perform particular functions for the user or another program.|

### Linux Architecture

| Layer          | Description|
|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hardware       | Peripheral devices such as the system's RAM, hard drive, CPU, and others.                                                                                                                                                                                                                          |
| Kernel         | The core of the Linux operating system whose function is to virtualize and control common computer hardware resources like CPU, allocated memory, accessed data, and others. The kernel gives each process its own virtual resources and prevents/mitigates conflicts between different processes. |
| Shell          | A command-line interface (CLI), also known as a shell that a user can enter commands into to execute the kernel's functions.                                                                                                                                                                       |
| System Utility | Makes available to the user all of the operating system's functionality.                                                                                                                                                                                                                           |
### File System Hierarchy

The Linux operating system is structured in a tree-like hierarchy and is documented in the Filesystem Hierarchy Standard (FHS). Linux is structured with the following standard top-level directories:

| Path   | Description                                                                                                                                                                                                                                                                                                                        |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/`      | The top-level directory is the root filesystem and contains all of the files required to boot the operating system before other filesystems are mounted, as well as the files required to boot the other filesystems. After boot, all of the other filesystems are mounted at standard mount points as subdirectories of the root. |
| `/bin`   | Contains essential command binaries.                                                                                                                                                                                                                                                                                               |
| `/boot`  | Consists of the static bootloader, kernel executable, and files required to boot the Linux OS.                                                                                                                                                                                                                                     |
| `/dev`   | Contains device files to facilitate access to every hardware device attached to the system.                                                                                                                                                                                                                                        |
| `/etc`   | Local system configuration files. Configuration files for installed applications may be saved here as well.                                                                                                                                                                                                                        |
| `/home`  | Each user on the system has a subdirectory here for storage.                                                                                                                                                                                                                                                                       |
| `/lib`   | Shared library files that are required for system boot.                                                                                                                                                                                                                                                                            |
| `/media` | External removable media devices such as USB drives are mounted here.                                                                                                                                                                                                                                                              |
| `/mnt`   | Temporary mount point for regular filesystems.                                                                                                                                                                                                                                                                                     |
| `/opt`   | Optional files such as third-party tools can be saved here.                                                                                                                                                                                                                                                                        |
| `/root`  | The home directory for the root user.                                                                                                                                                                                                                                                                                              |
| `/sbin`  | This directory contains executables used for system administration (binary system files).                                                                                                                                                                                                                                          |
| `/tmp`   | The operating system and many programs use this directory to store temporary files. This directory is generally cleared upon system boot and may be deleted at other times without any warning.                                                                                                                                    |
| `/usr`   | Contains executables, libraries, man files, etc.                                                                                                                                                                                                                                                                                   |
| `/var`   | This directory contains variable data files such as log files, email in-boxes, web application related files, cron files, and more.                                                                                                                                                                                                |

The `PS1` variable in Linux systems controls how your command prompt looks in the terminal. It's like a template that defines the text you see each time the system is ready for you to type a command. By customizing the `PS1` variable, you can change the prompt to display information such as your username, your computer's name, the current folder you're in, or even add colors and special characters. This allows you to personalize the command-line interface to make it more informative or visually appealing.

In addition to displaying basic information like your username and current folder, you can customize the command prompt to show other useful details such as the `IP address`, `date`, `time`, and the `success/failure` of the last command. This customization is especially helpful during penetration tests because it allows you to keep track of your actions more effectively. For instance, you can set the prompt to show the full path of the current working directory instead of just its name, and even include the target's IP address if needed. Using tools like script or reviewing the `.bash_history` file (located in the user's home directory), you can record all the commands you've used and organize them by date and time, which aids in documentation and analysis.

The prompt can be customized using special characters and variables in the shell’s configuration file (`.bashrc` for the Bash shell). For example, we can use: the `\u` character to represent the current username, `\h` for the hostname, and `\w` for the current working directory.

[bash prompt generator](https://bash-prompt-generator.org/)

### System Information

system details, processes, network configurations, users/user settings, and directories

Below is a list of essential tools to help gather this information. Most of these tools come pre-installed. However, this knowledge is not only crucial for routine Linux tasks, but also plays a key role when assessing security configurations, identifying vulnerabilities, or preventing potential security risks in Linux operating systems.

| Command  | Description                                                                                                                        |
|----------|------------------------------------------------------------------------------------------------------------------------------------|
| whoami   | Displays current username.                                                                                                         |
| id       | Returns users identity                                                                                                             |
| hostname | Sets or prints the name of current host system.                                                                                    |
| uname    | Prints basic information about the operating system name and system hardware.                                                      |
| pwd      | Returns working directory name.                                                                                                    |
| ifconfig | The ifconfig utility is used to assign or to view an address to a network interface and/or configure network interface parameters. |
| ip       | Ip is a utility to show or manipulate routing, network devices, interfaces and tunnels.                                            |
| netstat  | Shows network status.                                                                                                              |
| ss       | Another utility to investigate sockets.                                                                                            |
| ps       | Shows process status.                                                                                                              |
| who      | Displays who is logged in.                                                                                                         |
| env      | Prints environment or sets and executes command.                                                                                   |
| lsblk    | Lists block devices.                                                                                                               |
| lsusb    | Lists USB devices                                                                                                                  |
| lsof     | Lists opened files.                                                                                                                |
| lspci    | Lists PCI devices means any device that can connect into the motherboard by utilizing the PCI slot     |


### Logging In via SSH

Secure Shell (SSH) refers to a protocol that allows clients to access and execute commands or actions on remote computers. On Linux-based hosts and servers, as well as other Unix-like operating systems, SSH is one of the permanently installed standard tools and is the preferred choice for many administrators to configure and maintain a computer through remote access. It is an older and very proven protocol that does not require or offer a graphical user interface (GUI). For this reason, it works very efficiently and occupies very few resources. We use this type of connection in the following sections, and in most of the other module lab exercises, to offer the possibility to try out the learned commands and actions in a safe environment  
We can connect to our targets with the following command:    
```bash
omarNafea@htb[/htb]$ ssh htb-student@[IP address]
```
#### Whoami

This quick and easy command can be used on both Windows and Linux systems to get our current username. During a security assessment, we obtain reverse shell access on a host, and one of the first bits of situational awareness we should do is figuring out what user we are running as. From there, we can figure out if the user has any special privileges/access.

```bash
cry0l1t3@htb[/htb]$ whoami

# cry0l1t3
```

#### Id

The id command expands on the whoami command and prints out our effective group membership and IDs. This can be of interest to penetration testers looking to see what access a user may have and sysadmins looking to audit account permissions and group membership. In this output, the hackthebox group is of interest because it is non-standard, the adm group means that the user can read log files in /var/log and could potentially gain access to sensitive information, membership in the sudo group is of particular interest as this means our user can run some or all commands as the all-powerful root user. Sudo rights could help us escalate privileges or could be a sign to a sysadmin that they may need to audit permissions and group memberships to remove any access that is not required for a given user to carry out their day-to-day tasks.

```bash
cry0l1t3@htb[/htb]$ id

# uid=1000(cry0l1t3) gid=1000(cry0l1t3) groups=1000(cry0l1t3),1337(hackthebox),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lpadmin),126(sambashare)
```
#### Uname

Let's dig into the uname command a bit more. If we type man uname in our terminal, we will bring up the man page for the command, which will show the possible options we can run with the command and the results.  

```
NAME
       uname - print system information

SYNOPSIS
       uname [OPTION]...

DESCRIPTION
       Print certain system information.  With no OPTION, same as -s.

       -a, --all
              print all information, in the following order, except omit -p and -i if unknown:

       -s, --kernel-name
              print the kernel name

       -n, --nodename
              print the network node hostname

       -r, --kernel-release
              print the kernel release

       -v, --kernel-version
              print the kernel version

       -m, --machine
              print the machine hardware name

       -p, --processor
              print the processor type (non-portable)

       -i, --hardware-platform
              print the hardware platform (non-portable)

       -o, --operating-system
              print the operating system
```

```bash
uname -a
```
```
Linux omar-nafea 6.12.10-arch1-1 #1 SMP PREEMPT_DYNAMIC Sat, 18 Jan 2025 02:26:57 +0000 x86_64 GNU/Linux
```
From the above command, we can see that the kernel name is Linux, the hostname is box, the kernel release is 4.15.0-99-generic, the kernel version is #100-Ubuntu SMP Wed Apr 22 20:32:56 UTC 2020, and so on. Running any of these options on their own will give us the specific bit output we are interested in.

#### Uname to Obtain Kernel Release

Suppose we want to print out the kernel release to search for potential kernel exploits quickly. We can type uname -r to obtain this information.

```bash
uname -r

# 4.15.0-99-generic
```

With this info, we could go and search for "4.15.0-99-generic **exploit**," and the first result immediately appears useful to us.

Though a bit tedious, we can learn much from studying the manpages for common commands. We may even find out things that we did not even know were possible with a given command. 
This information is not only used for working with Linux. However, it will also be used later to discover vulnerabilities and misconfigurations on the Linux system that may contribute to privilege escalation. 

## Navigation

```bash
$ ls -l

total 32
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:37 Desktop
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Documents
drwxr-xr-x 3 cry0l1t3 htbacademy 4096 Nov 15 03:26 Downloads
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Music
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Pictures
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Public
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Templates
drwxr-xr-x 2 cry0l1t3 htbacademy 4096 Nov 13 17:34 Videos
```

Using `ls` without any additional options will display the directories and files only. However, we can also add the `-l` option to display more information on those directories and files

First, we see the total amount of blocks (1024-byte) used by the files and directories listed in the current directory, which indicates the total size used. That means it used 32 blocks * 1024 bytes/block = 32,768 bytes (or 32 KB) of disk space. Next, we see a few columns that are structured as follows

| Column Content | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| drwxr-xr-x     | Type and permissions                                                             |
| 2              | Number of hard links to the file/directory                                       |
| cry0l1t3       | Owner of the file/directory                                                      |
| htbacademy     | Group owner of the file/directory                                                |
| 4096           | Size of the file or the number of blocks used to store the directory information |
| Nov 13 17:37   | Date and time                                                                    |
| Desktop        | Directory name                                                                   |


However, we will not see everything that is in this folder. A directory can also have hidden files that start with a dot at the beginning of its name (e.g., .bashrc or .bash_history). Therefore, we need to use the command ls -la to list all files of a directory

```bash
~>~ ls -la
total 172
drwx------ 31 omar users 12288 Jan 27 12:03 .
drwxr-xr-x  4 root root   4096 Sep  4 18:57 ..
-rw-------  1 omar users  9641 Jan 27 12:03 .bash_history
-rw-r--r--  1 omar users  1690 Jan 25 13:05 .bashrc
drwxr-xr-x 36 omar users  4096 Jan 25 12:22 .cache
drwx------ 35 omar users  4096 Jan 25 07:46 .config
drwxr-xr-x  2 omar users  4096 Jan 21 17:29 Desktop
drwxr-xr-x  2 omar users  4096 Jan 24 14:47 Documents
drwxr-xr-x  9 omar users  4096 Nov 29 11:56 dotfiles
drwxr-xr-x 12 omar users 12288 Jan 27 11:55 Downloads
-rwxr-xr--  1 omar users    99 Jan 21 19:27 .fehbg
drwxr-xr-x 36 omar users  4096 Jan 25 12:18 fonts
drwxr-xr-x 17 omar users  4096 Jan 26 17:29 Fullstack
-rw-r--r--  1 omar users    63 Jan 25 09:45 .gitconfig
drwxr-xr-x  7 omar users  4096 Jan 13 06:39 knowledge
drwx------  6 omar users  4096 Jan 25 12:22 .local
drwx------  4 omar users  4096 Sep  4 20:02 .mozilla
drwx------  4 omar users  4096 Jan 21 17:09 .mozilla.backup
drwxr-xr-x  2 omar users  4096 Jan 21 17:29 Music
drwxr-xr-x  6 omar users  4096 Nov  5 14:51 my-app
drwxr-xr-x  5 omar users  4096 Sep 25 14:30 .npm
drwx------  3 omar users  4096 Jan 21 17:29 .nv
drwxr-xr-x  4 omar users  4096 Jan 21 18:32 Pictures
drwx------  3 omar users  4096 Jan 21 18:02 .pki
drwxr-xr-x 13 omar users  4096 Jan 25 12:22 powerline
-rw-r--r--  1 root root     26 Jan 25 08:57 .profile
drwxr-xr-x  6 omar users  4096 Oct 20 12:55 programming
drwxr-xr-x  2 omar users  4096 Jan 21 17:29 Public
drwxr-xr-x  7 omar users  4096 Nov 10 17:05 react_1
drwxr-xr-x  3 omar users  4096 Jan 21 18:08 .src
drwx------  2 omar users  4096 Jan 21 21:16 .ssh
drwxr-xr-x  2 omar users  4096 Jan 21 17:29 Templates
drwxr-xr-x  3 omar users  4096 Jan 22 20:21 .var
drwxr-xr-x  4 omar users  4096 Jan 21 18:14 Videos
drwxr-xr-x  3 omar users  4096 Sep  4 20:16 .vscode-oss
drwxr-xr-x  3 omar users  4096 Jan 21 17:10 .vscode-oss.backup
-rw-r--r--  1 omar users   388 Jan 25 08:21 .wget-hsts
-rw-------  1 omar users     0 Jan 22 18:12 .Xauthority
```

To list the contents of a directory, we do not necessarily need to navigate there first. We can also use “ls” to specify the path where we want to know the contents  

`ls -l /var/`

Let us change to the /dev/shm directory. 

`cd /dev/shm`

Since we were in the home directory before, we can quickly jump back to the directory we were last in.

```bash
cry0l1t3@htb[/dev/shm]$ cd -

cry0l1t3@htb[~]$
```

The shell also offers us the auto-complete function, which makes navigation easier. If we now type cd /dev/s and press [TAB] twice, we will get all entries starting with the letter “s” in the directory of /dev/.

```bash
cry0l1t3@htb[~]$ cd /dev/s [TAB 2x]

shm/ snd/
```
If we add the letter “h” to the letter “s,” the shell will complete the input since otherwise there will be no folders in this directory beginning with the letters “sh”. If we now display all contents of the directory, we will only see the following contents

```bash
cry0l1t3@htb[/dev/shm]$ ls -la /dev/shm

total 0
drwxrwxrwt  2 root root   40 Mai 15 18:31 .
drwxr-xr-x 17 root root 4000 Mai 14 20:45 ..
```

The first entry with a single dot (.) indicates the current directory we are currently in. The second entry with two dots (..) represents the parent directory /dev. This means we can jump to the parent directory with the following command

```bash
cry0l1t3@htb[/dev/shm]$ cd ..

cry0l1t3@htb[/dev]$
```

Since our shell is filled with some records, we can clean the shell with the command clear. First, however, let us return to the directory /dev/shm before and then execute the clear command to clean up our terminal.

```bash
cry0l1t3@htb[/dev]$ cd shm && clear
```

Another way to clean up our terminal is to use the shortcut [Ctrl] + [L]. We can also use the arrow keys (↑ or ↓) to scroll through the command history, which will show us the commands that we have used before. But we also can search through the command history using the shortcut [Ctrl] + [R] and type some of the text that we are looking for