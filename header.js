document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <header class="fixed top-0 left-0 w-full z-[999] bg-secondary text-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-24">
                
                <!-- Logo & Brand Section -->
                <a href="index.html" class="flex items-center gap-4 group">
                    <!-- Animated Outer Glow Ring Wrapper -->
                    <div class="relative flex items-center justify-center shrink-0">
                        
                        <!-- Glowing Pulse Animation around Logo -->
                        <div class="absolute -inset-1.5 bg-gradient-to-r from-primary via-white to-primary rounded-full blur-md opacity-75 group-hover:opacity-100 animate-pulse transition duration-500"></div>
                        
                        <!-- Logo Container with White Inner Ring to Contrast Dark Header -->
                        <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 border-2 border-white/80 shadow-2xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPBKXe31SnHz45mJj62GkpEoD-62YNV9dlQ&s"
                                alt="CR & FC Logo" class="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:rotate-12" />
                        </div>
                    </div>

                    <div>
                        <h1 class="text-xl sm:text-2xl font-extrabold tracking-tight leading-none text-white group-hover:text-primary transition-colors">CR & FC</h1>
                        <p class="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary font-bold mt-1">Est. 1922</p>
                    </div>
                </a>

                <!-- Desktop Navigation Links -->
                <nav class="hidden md:flex items-center gap-8">
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="index.html">Home</a>
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="history.html">About</a>
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="squads.html">Squads</a>
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="merchandise.html">Shop</a>
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="fixtures.html">Fixtures</a>
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="reservation.html">Facilities</a>
                    <a class="nav-link text-sm font-semibold hover:text-primary transition-colors" href="collection.html">Gallery</a>

                    <div class="flex items-center gap-4">
                        <a href="login.html"
                            class="hidden sm:block bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md active:scale-95 text-center">
                            Login / Pay
                        </a>
                        <div class="hidden sm:block border-l border-white/20 h-8 mx-2"></div>
                        <button onclick="document.getElementById('global-search')?.focus()" class="text-white hover:text-primary transition-colors">
                            <span class="material-symbols-outlined">search</span>
                        </button>
                        <button id="mobile-menu-btn" class="md:hidden text-white hover:text-primary transition-colors ml-2">
                            <span class="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>

        <!-- Mobile Navigation Menu (Scrollable) -->
        <div id="mobile-menu"
            class="hidden absolute top-24 left-0 w-full bg-secondary border-t border-white/10 shadow-2xl md:hidden z-40 max-h-[calc(100vh-6rem)] overflow-y-auto transition-all">
            <div class="flex flex-col px-6 pt-5 pb-8 gap-3">
                
                <a class="text-sm font-semibold text-white hover:text-primary flex items-center gap-2 py-1.5 transition-colors" href="index.html">
                    <span class="material-symbols-outlined text-lg text-primary">home</span> Home
                </a>
                <a class="text-sm font-semibold text-white hover:text-primary flex items-center gap-2 py-1.5 transition-colors" href="squads.html">
                    <span class="material-symbols-outlined text-lg text-primary">groups</span> Squads
                </a>
                <a class="text-sm font-semibold text-white hover:text-primary flex items-center gap-2 py-1.5 transition-colors" href="merchandise.html">
                    <span class="material-symbols-outlined text-lg text-primary">shopping_bag</span> Shop
                </a>
                <a class="text-sm font-semibold text-white hover:text-primary flex items-center gap-2 py-1.5 transition-colors" href="fixtures.html">
                    <span class="material-symbols-outlined text-lg text-primary">event</span> Fixtures
                </a>
                <a class="text-sm font-semibold text-white hover:text-primary flex items-center gap-2 py-1.5 transition-colors" href="reservation.html">
                    <span class="material-symbols-outlined text-lg text-primary">sports_tennis</span> Facilities
                </a>

                <!-- "More" Accordion Dropdown -->
                <details class="group border-t border-white/10 pt-2 mt-1">
                    <summary class="list-none text-sm font-semibold text-gray-300 hover:text-white flex items-center justify-between cursor-pointer py-1.5">
                        <span class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg text-primary">more_horiz</span> More
                        </span>
                        <span class="material-symbols-outlined text-sm transition-transform group-open:rotate-180">expand_more</span>
                    </summary>
                    <div class="flex flex-col pl-7 pt-2 gap-2 text-xs font-medium text-gray-400">
                        <a href="history.html" class="hover:text-primary py-1 flex items-center gap-2 transition-colors">
                            <span class="material-symbols-outlined text-sm">info</span> About Us
                        </a>
                        <a href="collection.html" class="hover:text-primary py-1 flex items-center gap-2 transition-colors">
                            <span class="material-symbols-outlined text-sm">photo_library</span> Gallery
                        </a>
                    </div>
                </details>

                <a href="login.html"
                    class="bg-primary hover:bg-red-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold mt-3 w-full text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 shrink-0">
                    <span class="material-symbols-outlined text-lg">login</span> Login / Pay
                </a>

            </div>
        </div>
    </header>
    `;

    const container = document.getElementById("header-container");
    if (container) {
        container.innerHTML = headerHTML;

        // Header එක Fixed නිසා Body එක යටට වැසී යාම වැළැක්වීමට Top Padding යෙදීම
        document.body.style.paddingTop = "96px";

        // Mobile Menu Toggle Event
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Active Link Highlighting Logic
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const desktopLinks = container.querySelectorAll(".nav-link");

        desktopLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("text-primary", "border-b-2", "border-primary", "pb-1");
            }
        });
    }
});