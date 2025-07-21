-- ~/.config/nvim/lua/options.lua

local opt = vim.opt -- for conciseness

-- Line numbers
opt.relativenumber = true
opt.number = true

-- Tabs and indentation
opt.tabstop = 4
opt.shiftwidth = 4
opt.expandtab = true
opt.autoindent = true

-- Search settings
opt.ignorecase = true
opt.smartcase = true

-- Appearance
opt.termguicolors = true
opt.signcolumn = 'yes' -- Always show the sign column
opt.clipboard = 'unnamedplus' -- Use system clipboard

-- Behavior
opt.wrap = true          -- Enable line wrapping
opt.linebreak = true     -- Wrap lines at convenient places (word boundaries)
opt.scrolloff = 8 -- Keep 8 lines visible above/below the cursor
opt.sidescrolloff = 8

-- Turn off swap files and backups
opt.swapfile = false
opt.backup = false
opt.undodir = os.getenv('HOME') .. '/.vim/undodir'
opt.undofile = true

