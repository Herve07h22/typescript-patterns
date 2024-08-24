/*

WeakMap allows associating data to objects in a way that doesn't prevent 
the key objects from being collected, even if the values reference the keys. 
However, a WeakMap doesn't allow observing the liveness of its keys, which 
is why it doesn't allow enumeration; 

*/

class EntityManager {
  originalEntity: Record<string, any> = {};
  constructor(private entity: object) {
    // Store a deep copy of the original entity to track changes.
    this.originalEntity = JSON.parse(JSON.stringify(entity));
  }
  listChangedAttributes(updatedEntity: object): Record<string, any> {
    const changedAttributes: Record<string, any> = {};
    
    // Loop through the original entity's attributes.
    for (const key in this.originalEntity) {
        const originalValue = this.originalEntity[key];
        const updatedValue = (updatedEntity as any)[key];
        // Check if the attribute value has changed.
        if (originalValue !== updatedValue) {
          changedAttributes[key] = {
            original: originalValue,
            updated: updatedValue,
          };
        }
      }
    return changedAttributes;
  }
}

export class FakeORM {
  private entities: WeakMap<object, EntityManager> = new WeakMap();

  load<T extends object>(entity: T) {
    if (!this.entities.has(entity)) {
      this.entities.set(entity, new EntityManager(entity));
    }
    return entity
  }

  save<T extends object>(entity: T) {
    return this.entities.get(entity)?.listChangedAttributes(entity) || {};
  }
}
