const $sidebar = document.getElementById('sidebar');
const $mask = document.getElementById('mask');
const $trigger1 = document.getElementById('sidebar-trigger');
const $trigger2 = document.getElementById('sidebar-trigger2');

class SidebarUtil {
  static #isExpanded = false;

  static toggle() {
    this.#isExpanded = !this.#isExpanded;
    document.body.toggleAttribute('sidebar-display', this.#isExpanded);
    $sidebar.classList.toggle('z-2', this.#isExpanded);
    $mask.classList.toggle('d-none', !this.#isExpanded);
  }
}

export function initSidebar() {
  if ($trigger1) $trigger1.onclick = SidebarUtil.toggle;
  if ($trigger2) $trigger2.onclick = SidebarUtil.toggle;
  if ($mask) $mask.onclick = SidebarUtil.toggle;
      }
