class Rides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.string :start
      t.string :end
      t.integer :distance
      t.integer :time
      t.string :title
    end
  end
end
