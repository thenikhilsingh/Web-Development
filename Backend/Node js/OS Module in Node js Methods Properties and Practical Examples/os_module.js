const os = require("os");

// 1. Get the OS Platform and  User Info
// Returns the operating system platform (e.g. win32, linux, darwin)
console.log("Platform", os.platform());
console.log("User:", os.userInfo());

// 2. Get the OS CPU architecture
// Returns the architecture of the CPU (e.g. x64, arm,ia32)
console.log("CPU Architecture:", os.arch());

// 3. get free system memory
// Returns the amount of free system memory in bytes
console.log("free memory:", os.freemem(), "bytes");

// 4. Get total system memory
//Returns the total amount of system memory in bytes
console.log("Total memory:", os.totalmem(), "bytes");

// 5. Get system uptime
// Returns the system uptime in seconds
console.log("System Uptime", os.uptime(), "seconds");

// 6. Get home directory
// Returns  the home directory of the current user
console.log("Home directory", os.homedir());

// 7. Get host name
// Returns the hostname of the operating system
console.log("Host Name:", os.hostname());

// 8. Get network Interfaces
// Returns information about the network interfaces of the system
console.log("Network Interfaces:", os.networkInterfaces());

// 9. Get CPU Information
// Returns an array of objects with details about each logical CPU/core
console.log("CPU Info:", os.cpus());

// 10. Get temporary directory
// Returns the operating system's default directory for temporary files
console.log("Temporary Directory:", os.tmpdir());

// 11. Get oprating system name
// Returns the operating system name as returned by uname(3). for ex:- it returns 'Linux' on Linux, 'Darwin' on  MacOS, and 'Windows_NT' on Windows.
console.log("Operating System", os.type());
