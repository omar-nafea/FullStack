-- ~/.config/nvim/lua/keymaps.lua
local map = vim.keymap.set

-- General Keymaps
map('n', '<Esc>', '<cmd>nohlsearch<cr>') -- Clear search highlighting

-- Telescope (Fuzzy Finder)
map('n', '<leader>ff', '<cmd>Telescope find_files<cr>', { desc = 'Find Files' })
map('n', '<leader>fg', '<cmd>Telescope live_grep<cr>', { desc = 'Live Grep' })
map('n', '<leader>fb', '<cmd>Telescope buffers<cr>', { desc = 'Find Buffers' })
map('n', '<leader>fh', '<cmd>Telescope help_tags<cr>', { desc = 'Help Tags' })

-- Neo-tree (File Explorer)
map('n', '<leader>e', '<cmd>Neotree toggle<cr>', { desc = 'Toggle File Explorer' })

-- LSP (Language Server Protocol)
map('n', 'K', vim.lsp.buf.hover, { desc = 'Hover Documentation' })
map('n', 'gd', vim.lsp.buf.definition, { desc = 'Go to Definition' })
map('n', 'gr', vim.lsp.buf.references, { desc = 'Go to References' })
map('n', '<leader>ca', vim.lsp.buf.code_action, { desc = 'Code Action' })
map('n', '<leader>rn', vim.lsp.buf.rename, { desc = 'Rename' })


-- Window Navigation
map('n', '<C-h>', '<C-w><C-h>', { desc = 'Move to left window' })
map('n', '<C-j>', '<C-w><C-j>', { desc = 'Move to lower window' })
map('n', '<C-k>', '<C-w><C-k>', { desc = 'Move to upper window' })
map('n', '<C-l>', '<C-w><C-l>', { desc = 'Move to right window' })


-- Custom surround mappings (add after nvim-surround is loaded)
vim.api.nvim_create_autocmd("User", {
  pattern = "LazyLoad",
  callback = function(event)
    if event.data == "nvim-surround" then
      -- Surround 2 words with backticks
      vim.keymap.set('n', '<leader>s`', function()
        vim.api.nvim_feedkeys('ys2w`', 'n', false)
      end, { desc = 'Surround 2 words with backticks' })
      
      -- Surround 2 words with double quotes
      vim.keymap.set('n', '<leader>s"', function()
        vim.api.nvim_feedkeys('ys2w"', 'n', false)
      end, { desc = 'Surround 2 words with quotes' })
      
      -- Surround 2 words with single quotes
      vim.keymap.set('n', '<leader>s\'', function()
        vim.api.nvim_feedkeys('ys2w\'', 'n', false)
      end, { desc = 'Surround 2 words with single quotes' })
      
      -- Surround 2 words with parentheses
      vim.keymap.set('n', '<leader>s(', function()
        vim.api.nvim_feedkeys('ys2w)', 'n', false)
      end, { desc = 'Surround 2 words with parentheses' })
      
      -- Surround 2 words with brackets
      vim.keymap.set('n', '<leader>s[', function()
        vim.api.nvim_feedkeys('ys2w]', 'n', false)
      end, { desc = 'Surround 2 words with brackets' })
      
      -- Surround 2 words with braces
      vim.keymap.set('n', '<leader>s{', function()
        vim.api.nvim_feedkeys('ys2w}', 'n', false)
      end, { desc = 'Surround 2 words with braces' })
    end
  end,
})
map('i', '<C-A-p>', '```', { desc = 'Insert triple backticks' })
