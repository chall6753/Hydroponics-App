# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 0) do
  create_table "relays", id: :integer, charset: "utf8mb4", force: :cascade do |t|
    t.integer "status", null: false
  end

  create_table "sensor_data", id: :integer, charset: "utf8", force: :cascade do |t|
    t.float "temp_air"
    t.float "humidity"
    t.float "temp_water"
    t.float "pH"
    t.float "ec"
    t.integer "ph_up_pump"
    t.integer "ph_down_pump"
    t.integer "pmp_a"
    t.integer "pmp_b"
    t.timestamp "date", default: -> { "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }, null: false
    t.string "comment", limit: 45
  end

end
