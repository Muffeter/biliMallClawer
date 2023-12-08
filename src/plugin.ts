interface Plugin {
  name: string;
  method: (...args: any[]) => any;
}

class PluginManager<T extends Plugin> {
  private plugins: Map<string, T>;

  constructor() {
    this.plugins = new Map();
  }

  register(plugin: T) {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Plugin ${plugin.name} already registered.`);
    }
    this.plugins.set(plugin.name, plugin);
  }

  unregister(pluginName: string) {
    this.plugins.delete(pluginName);
  }

  invoke(pluginName: string, ...args: any[]) {
    const plugin = this.plugins.get(pluginName);
    if (!plugin) {
      throw new Error(`Plugin ${pluginName} not found.`);
    }
    return plugin.method(...args);
  }
}

const pluginManager = new PluginManager<Plugin>();

export { pluginManager, Plugin };
