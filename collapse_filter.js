define (["jquery", "fab/list-plugin"], function (jQuery, FbListPlugin) {
    
    var FbListCollapse_filter = new Class ({
        Extends: FbListPlugin,

        initialize: function (options) {
            // Bootstrap contract and expand icons
            options.iconContract = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-dash' fill='currentColor'><path fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/></svg>",
            options.iconExpand = "<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-compact-down' fill='currentColor'><path fill-rule='evenodd' d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'/></svg>",
            
            this.parent(options);

            // Check that the filters are on the left
            if (options.sideFilters == 6) {
                var rows        = document.querySelectorAll("tr[data-filter-row^=" + options.table + "]"),
                    clearFilter = document.querySelector(".clearFilters"),
                    self        = this;
                    
                // Go through all the filters
                rows.forEach(row => {
                    var content = row.children[0];

                    this.createIcon(content);

                    // How filters will start
                    content = row.nextElementSibling;
                    content = content.children[0];
                    content.style.display = options.default == 0 ? "none" : "block";

                    /* When you click on the filter line it will contract if it is
                     expanded and expand if it is contracted.*/
                    row.addEventListener("click", function() {                        
                        var icon    = this.querySelector(".icon"),
                            content = this.nextElementSibling;
                        
                        content = content.children[0];

                        self.addActionClick(icon, content, content.style.display);
                    });
                });

                /* Collapse all filters */
                if (options.collapseAll == 1) {
                    btnClearFilter = document.querySelector("#clear-filter-button");
                    
                    // If the option to clean the filters is a button
                    if (btnClearFilter != null) {
                        clearFilter.style.width = "85%";
                        btnClearFilter.style.padding = "5px 30px";
                        btnClearFilter.style.width = "";
                    }
                    
                    clearFilter = clearFilter.parentNode;
                    this.createIcon(clearFilter);

                    var icon = clearFilter.querySelector(".icon");
                    
                    if (btnClearFilter != null) {
                        icon.style.width = "40px";
                        icon.style.textAlign = "right";
                    }
                    
                    clearFilter.addEventListener("click", function() {
                        var action = null;

                        if (icon.title == "contrair") {
                            action         = "block";
                            icon.title     = "expandir";
                            icon.innerHTML = options.iconExpand;
                        } else {
                            action         = "none";
                            icon.title     = "contrair";
                            icon.innerHTML = options.iconContract;
                        }

                        // Modify all of the filters
                        rows.forEach(row => {
                            var icon    = row.querySelector(".icon"),
                                content = row.nextElementSibling;

                            self.addActionClick(icon, content.children[0], action);
                        });
                            
                    });
                }
            }
        },

        createIcon: function (content) {
            // Create tag with the expand and contract icon
            var icon       = document.createElement("span");
            icon.innerHTML = this.options.default == 0 ? this.options.iconExpand : this.options.iconContract;
            
            icon.setAttribute("class", "icon");
            icon.setAttribute("title", (this.options.default == 0 ? "expandir" : "contrair"));
            icon.setAttribute("style", "align-self:center");
            content.appendChild(icon);

            // Adding spacing between the element name and the icon
            content.style.display        = "flex";
            content.style.justifyContent = "space-between";
        },

        addActionClick: function (icon, content, action) {
            // Being determined by the CSS display property, it can be block or none
            if (action === "block") {
                icon.title = "expandir";
                icon.innerHTML = this.options.iconExpand;
                content.style.display = "none";
            } else {
                icon.title = "contrair";
                icon.innerHTML = this.options.iconContract;
                content.style.display = "block";
            }
        }
    });

    return FbListCollapse_filter;
});
