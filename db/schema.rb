# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_06_214758) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.integer "shelf_life"
    t.string "storage_type"
    t.bigint "user_id"
    t.bigint "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["category_id"], name: "index_foods_on_category_id"
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "groceries", force: :cascade do |t|
    t.integer "status"
    t.integer "time_left"
    t.bigint "food_id"
    t.bigint "list_id"
    t.bigint "pantry_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["food_id"], name: "index_groceries_on_food_id"
    t.index ["list_id"], name: "index_groceries_on_list_id"
    t.index ["pantry_id"], name: "index_groceries_on_pantry_id"
  end

  create_table "lists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "pantries", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_pantries_on_user_id"
  end

  create_table "pantries_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pantry_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.boolean "dark_mode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "foods", "categories"
  add_foreign_key "foods", "users"
  add_foreign_key "groceries", "foods"
  add_foreign_key "groceries", "lists"
  add_foreign_key "groceries", "pantries"
  add_foreign_key "lists", "users"
  add_foreign_key "pantries", "users"
end
