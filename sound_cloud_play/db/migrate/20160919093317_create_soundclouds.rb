class CreateSoundclouds < ActiveRecord::Migration
  def change
    create_table :soundclouds do |t|
      t.string :url

      t.timestamps null: false
    end
  end
end
