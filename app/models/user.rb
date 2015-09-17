class User < ActiveRecord::Base
  has_many :rides
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

end
