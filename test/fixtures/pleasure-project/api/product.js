module.exports = {
  schema: {
    name: String,
    description: String,
    categories: {
      type: Array,
    },
    price: {
      type: Number,
      default: 0
    },
    stock: {
      type: Number,
      default: 0
    }
  },
  schemaCreated (schema) {
    schema.index({ name: 'text' })
  },
  access: {
    create ({ user }) {
      // only admins can create products
      return user && user.level === 'admin'
    }
  }
}