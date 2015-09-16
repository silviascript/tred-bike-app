class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.string :title
    end
  end
end
