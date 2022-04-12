/**
 * Simplified credential storage for usage in Capacitor apps.
 */
export default class CredentialStorage {
  constructor (name) {
    this.name = name
  }

  async write (id, data) {
    localStorage[`credentials-${this.name}-${id}`] = JSON.stringify(data)
  }

  async read (id) {
    const serialized = localStorage[`credentials-${this.name}-${id}`]
    return serialized ? JSON.parse(serialized) : undefined
  }

  async delete (id) {
    delete localStorage[`credentials-${this.name}-${id}`]
  }
}
