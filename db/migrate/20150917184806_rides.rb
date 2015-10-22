class Rides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.string :start
      t.string :end
      t.string :distance
      t.string :time
      t.string :title
    end
  end
end
