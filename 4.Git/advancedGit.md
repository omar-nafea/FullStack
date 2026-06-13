git-cat-file - Provide contents or details of repository objects

Output the contents or other properties such as size, type or delta information of one or more objects.

This command can operate in two modes, depending on whether an option from the --batch family is specified.

In non-batch mode, the command provides information on an object named on the command line.

In batch mode, arguments are read from standard input


OUTPUT
If -t is specified, one of the <type>.

If -s is specified, the size of the <object> in bytes.

If -e is specified, no output, unless the <object> is malformed.

If -p is specified, the contents of <object> are pretty-printed.

If <type> is specified, the raw (though uncompressed) contents of the <object> will be returned.


