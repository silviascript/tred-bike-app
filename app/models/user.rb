class User < ActiveRecord::Base
  has_many :rides
  def self.from_auth auth
    find_by(uid: auth.uid, provider: auth.provider) || self.create_from_auth(auth)
  end
  def self.create_from_auth auth
    create(uid: auth.uid, provider: auth.provider, name: auth.info.nickname)
  end
end
